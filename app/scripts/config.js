var bower_c = '../bower_components/'

requirejs.config({
	baseUrl: 'scripts',

	paths: {
		angular: bower_c + 'angular/angular',
		angular_resource: bower_c + 'angular-resource/angular-resource',
		angular_route: bower_c + 'angular-route/angular-route',
		app: 'app'
	},

	shim: {
		angular: {exports: 'angular'},
		angular_resource: {exports: 'angular_resource'},
		angular_route: {exports: 'angular_route'}
	}
});

define(['angular', 'angular_resource', 'angular_route'], function(angular, angular_resource, angular_route){
  'use strict';

  /**
   * @ngdoc overview
   * @name resumeApp
   * @description
   * # resumeApp
   *
   * Main module of the application.
   */
  var resumeApp =  angular
    .module('resumeApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/login',{
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    return resumeApp;
});