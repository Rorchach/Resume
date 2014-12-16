define(['angular', 'json!../data/user.json'], function(angular, user){

	return function(){
		var exports = {};

		exports.getUser = function(username) {
			var one_user = user[username];
			one_user.gender = one_user.gender === '0' ? '男' : '女';
			
			return one_user;
		}

		return exports;
	};

});