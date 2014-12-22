define(['angular', 'ngMaterial', 'json!../data/user.json', 'UserFactory', 'ngAnimate', 'ngAria', 'ngRoute'],
    function(angular, ngMaterial, user, UserFactory){
    'use strict';

    return angular.module('ResumeApp', [
        'ngAnimate',
        'ngMaterial',
        'ngRoute'])
        .factory('UserFactory', UserFactory)
        .controller('ResumeCtrl', function($scope, $mdSidenav, UserFactory){
            $scope.user = UserFactory.getUser('likx');

            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };
        })
        .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
            $scope.close = function() {
               $mdSidenav('left').close();
            };
        })
        .controller('EditorCtrl', function($scope, $mdDialog){
            $scope.showAlert = function(ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('title')
                        .content('content')
                        .ok('Got it!')
                );
            }
        })
        .controller('ViewCtrl', function($scope, UserFactory){
            $scope.user = UserFactory.getUser('likx');
        })
        .config(function($routeProvider){
            $routeProvider
                .when('/editor', {
                    templateUrl: 'views/editor.html',
                    controller: 'EditorCtrl'
                })
                .when('/view', {
                    templateUrl: 'views/view.html',
                    controller: 'ViewCtrl'
                });
        });

});