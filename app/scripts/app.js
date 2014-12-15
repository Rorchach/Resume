define(['angular', 'ngMaterial', 'json!../data/user.json', 'echarts', 'ngAnimate', 'cookie', 'ngAria', 'ngRoute'],
    function(angular, ngMaterial, user, ec){
    'use strict';

    user = user["likx"];
    user.gender = user.gender === '0' ? '男' : '女';

    angular.module('resumeApp', [
        'ngAnimate',
        'ngCookies',
        'ngMaterial',
        'ngRoute'])
        .controller('ResumeCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
            $scope.user = user;

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
        .controller('ViewCtrl', function($scope){


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