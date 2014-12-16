require(['angular'], function(angular){

    /**
     * @ngdoc function
     * @name resumeApp.controller:LoginCtrl
     * @description
     * # LoginCtrl
     * Controller of the resumeApp
     */

    return angular.module('ResumeApp')
      .controller('LoginCtrl', function ($scope) {
        $scope.email = 'cookmycode@gmail.com';
        $scope.password = '123456';

        $scope.loginSubmit = function() {
        	if ($scope.email === 'cookmycode@gmail.com' && $scope.password == '123456') {
        		alert('登录成功!');
        	} else {
        		alert('登录失败!');
        	}
        }
      });
});
