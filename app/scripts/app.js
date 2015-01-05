define(['angular', 'json!../data/user.json', 'UserFactory', 'ngAnimate', 'ngAria', 'ngRoute'],
    function(angular, user, UserFactory){
    'use strict';

    return angular.module('ResumeApp', [
        'ngAnimate',
        'ngRoute'])
        .factory('UserFactory', UserFactory)
        .controller('ResumeCtrl', function($scope, UserFactory){
            $scope.user = UserFactory.getUser('likx');
            $scope.preview = true;
        })
        .controller('LeftCtrl', function($scope, $timeout) {
            
        })
        .controller('EditorCtrl', function($scope){
           
        })
        .controller('ViewCtrl', function($scope, $rootScope, UserFactory){
            $scope.preview = 1;
            $scope.user = UserFactory.getUser('huyang');
        })
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'views/view.html',
                    controller: 'ViewCtrl'
                })
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

// define(['angular', 'ngMaterial', 'json!../data/user.json', 'UserFactory', 'ngAnimate', 'ngAria', 'ngRoute'],
//     function(angular, ngMaterial, user, UserFactory){
//     'use strict';

//     return angular.module('ResumeApp', [
//         'ngAnimate',
//         'ngMaterial',
//         'ngRoute'])
//         .factory('UserFactory', UserFactory)
//         .controller('ResumeCtrl', function($scope, $mdSidenav, UserFactory){
//             $scope.user = UserFactory.getUser('likx');
//             $scope.preview = false;

//             $scope.toggleLeft = function() {
//                 $mdSidenav('left').toggle();
//             };
//         })
//         .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
//             $scope.close = function() {
//                $mdSidenav('left').close();
//             };
//         })
//         .controller('EditorCtrl', function($scope, $mdDialog){
//             $scope.showAlert = function(ev) {
//                 $mdDialog.show(
//                     $mdDialog.alert()
//                         .title('title')
//                         .content('content')
//                         .ok('Got it!')
//                 );
//             }
//         })
//         .controller('ViewCtrl', function($scope, $rootScope, UserFactory){
//             $scope.preview = 1;
//             console.log($rootScope);
//             $scope.user = UserFactory.getUser('huyang');
//         })
//         .config(function($routeProvider){
//             $routeProvider
//                 .when('/', {
//                     templateUrl: 'views/view.html',
//                     controller: 'ViewCtrl'
//                 })
//                 .when('/editor', {
//                     templateUrl: 'views/editor.html',
//                     controller: 'EditorCtrl'
//                 })
//                 .when('/view', {
//                     templateUrl: 'views/view.html',
//                     controller: 'ViewCtrl'
//                 });
//         });

// });