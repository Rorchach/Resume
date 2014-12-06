define(['angular', 'ngMaterial', 'json!../data/user.json', 'ngAnimate', 'cookie', 'ngAria'],
    function(angular, ngMaterial, user){
    'use strict';

    var resumeApp =  angular.module('resumeApp', ['ngAnimate', 'ngCookies', 'ngMaterial'])
                    .controller('ResumeCtrl', ['$scope', '$cookies', '$timeout', '$mdSidenav', ResumeCtrl])
                    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
                      $scope.close = function() {
                        $mdSidenav('left').close();
                      };
                    })
                    .controller('RightCtrl', function($scope, $timeout, $mdSidenav) {
                      $scope.close = function() {
                        $mdSidenav('right').close();
                      };
                    });

    function ResumeCtrl($scope, $cookies, $timeout, $mdSidenav) {
        console.log($mdSidenav);
        user.gender = user.gender === '0' ? '男' : '女';

        $cookies.user = user;

        console.log($cookies.user);

        for (var key in user.skill) {
           user.skill[key] = user.skill[key].join('、');
        }

        $scope.user = user;

        $scope.toggleLeft = function() {
            console.log(11);
            $mdSidenav('left').toggle();
        };
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();
        };
    }

    return resumeApp;
});