define(['angular', 'json!../data/user.json'], function(angular, user){

	return function(){
		var exports = {};

		exports.getUser = function(username) {
			var one_user = user[username];
			one_user.gender = one_user.gender === '0' ? '男' : '女';

			for (var key in one_user.skill) {
                if (one_user.skill[key] instanceof Array) {
                    one_user.skill[key] = one_user.skill[key].join('、');
                }
            }    
			
			return one_user;
		}

		return exports;
	};

});