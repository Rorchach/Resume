define(['angular', 'json!../data/user.json'], function(angular, user) {
	var loginApp = angular.module('login', []);

	loginApp.controller('LoginFormCtr', ['$scope', function($scope){
		$scope.email = 'cookmycode@gmail.com';
		$scope.pwd = '123456';

		$scope.loginSubmit = function() {
			if ($scope.email === user.email && $scope.pwd === user.pwd) {
				alert('登陆成功！');
				user.pwd = 1;
			} else {
				alert('登陆失败！');
			}
		}
	}]);
});