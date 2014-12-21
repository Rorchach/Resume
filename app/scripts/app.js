define(['angular', 'ngMaterial', 'json!../data/user.json', 'UserFactory', 'ngAnimate', 'ngAria', 'ngRoute'],
    function(angular, ngMaterial, user, UserFactory){
    'use strict';
console.log(user);

    angular.module('ResumeApp', [
        'ngAnimate',
        'ngMaterial',
        'ngRoute'])
        .factory('UserFactory', UserFactory)
        .controller('ResumeCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
            $scope.user = user;
console.log(user);
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };
            $scope.toggleRight = function() {
                $mdSidenav('right').toggle();
            };
        }])
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

var user = UserFactory.getUser('likx')
console.log(user);
            for (var key in user.skill) {
                if (user.skill[key] instanceof Array) {
                    user.skill[key] = user.skill[key].join('、');
                }
            }    
            
            $scope.user = user;
        })
        .config(function($routeProvider, $locationProvider){
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