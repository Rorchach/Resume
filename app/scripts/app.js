define(['angular', 'json!../data/user.json', 'ngAnimate', 'cookie'],
    function(angular, user){
    'use strict';

    var resumeApp =  angular.module('resumeApp', ['ngAnimate', 'ngCookies'])
                    .controller('ResumeCtrl', ['$scope', '$cookies', ResumeCtrl]);

    function ResumeCtrl($scope, $cookies) {
        user.gender = user.gender === '0' ? '男' : '女';

        $cookies.user = user;

        console.log($cookies.user);

        for (var key in user.skill) {
           user.skill[key] = user.skill[key].join('、');
        }
        $scope.user = user;
    }

    return resumeApp;
});