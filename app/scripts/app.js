define(['angular', 'json!../data/user.json', ['ui.bootstrap']], function(angular, user){
    'use strict';

    var resumeApp =  angular.module('resumeApp', [])
                    .controller('ResumeCtrl', ['$scope', ResumeCtrl]);

    function ResumeCtrl($scope) {
        user.gender = user.gender === '0' ? '男' : '女';
        for (var key in user.skill) {
           user.skill[key] = user.skill[key].join('、');
        }
        $scope.user = user;
    }

    return resumeApp;
});