requirejs.config({
	baseUrl: '/public/js',

	paths: {
		login: 'login',
		angular: 'lib/angularjs/angular',
		text: 'lib/requirejs-text/text',
		json: 'lib/requirejs-plugins/json'
	},

	shim: {
		angular: {exports: 'angular'}
	}
});

requirejs(['login']);