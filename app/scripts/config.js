var bower_c = '../bower_components/'

requirejs.config({
	baseUrl: 'scripts',

	paths: {
		hammer: bower_c + 'hammerjs/hammer',
		angular: bower_c + 'angular/angular',
		cookie: bower_c + 'angular-cookies/angular-cookies',
		ngAnimate: bower_c + 'angular-animate/angular-animate',
		ngRoute: bower_c + 'angular-route/angular-route',
		ngAria: bower_c + 'angular-aria/angular-aria',
		ngMaterial: bower_c + 'angular-material/angular-material',
		text: bower_c + 'requirejs-text/text',
		json: bower_c + 'requirejs-plugins/src/json',
		app: 'app',
		login: 'login'
	},

	shim: {
		angular: {exports: 'angular'},
		ngMaterial: {deps: ['angular']},
		ngRoute: {deps: ['angular']},
		ngAnimate: {deps: ['angular']},
		ngAria: {deps: ['angular']},
		cookie: {deps: ['angular']}
	}
});

define(['app','login']);