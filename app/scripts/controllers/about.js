require(['angular'], function(angular){
	'use strict';

	/**
	 * @ngdoc function
	 * @name resumeApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the resumeApp
	 */
	return angular.module('ResumeApp')
	  .controller('AboutCtrl', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	  });
});