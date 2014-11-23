define(['angular'], function(angular) {
	var loginApp = angular.module('login', []);

	loginApp.controller('LoginFormCtr', ['$scope', function($scope){
		$scope.email = '123@qq.com';
		console.log($scope.email);
	}]);
});