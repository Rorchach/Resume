requirejs.config({
	baseUrl: '/public/js',

	paths: {
		login: 'login',
		angular: 'lib/angularjs/angular'
	},

	shim: {
		angular: {exports: 'angular'}
	}
});

requirejs(['login']);