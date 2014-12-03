define(['angular', 'json!../data/user.json'],
    function(angular, user){
        var LoginApp = angular.module('LoginApp', [])
            .controller('LoginFormCtrl', ['$scope', '$timeout', '$window', function($scope, $timeout, $window){
                $scope.user = user;

                $scope.LoginSubmit = function(form) {
                    if ($scope.user.email === user.email && $scope.user.pwd === user.pwd) {

                        $window.alert('登陆成功');

                        $timeout(function(){
                            location.href = '/';
                        }, 500)
                        
                    } else {
                        $window.alert('登录失败');
                    }
                }

            }]);
});