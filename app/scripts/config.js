var bower_c = '../bower_components/';

requirejs.config({
	baseUrl: 'scripts',

	paths: {
		hammer: bower_c + 'hammerjs/hammer',
		angular: bower_c + 'angular/angular',
		cookie: bower_c + 'angular-cookies/angular-cookies',
		ngAnimate: bower_c + 'angular-animate/angular-animate',
		ngRoute: bower_c + 'angular-route/angular-route',
		echarts: 'http://echarts.baidu.com/build/dist/echarts-all',
		ngAria: bower_c + 'angular-aria/angular-aria',
		ngMaterial: bower_c + 'angular-material/angular-material',
		text: bower_c + 'requirejs-text/text',
		json: bower_c + 'requirejs-plugins/src/json',
		app: 'app',
		login: 'login',
		UserFactory: 'factories/UserFactory'
	},

	shim: {
		angular: {exports: 'angular'},
		ngMaterial: {deps: ['angular']},
		ngRoute: {deps: ['angular']},
		ngAnimate: {deps: ['angular']},
		ngAria: {deps: ['angular']},
		uiBootstrap: {deps: ['angular']},
		bootstrap: {deps: ['angular']},
		echarts: {exports: 'echarts'}
	}
});

define(['app']);