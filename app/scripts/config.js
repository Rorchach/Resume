var bower_c = '../bower_components/'

requirejs.config({
	baseUrl: 'scripts',

	paths: {
		angular: bower_c + 'angular/angular',
		ngAnimate: bower_c + 'angular-animate/angular-animate',
		text: bower_c + 'requirejs-text/text',
		json: bower_c + 'requirejs-plugins/src/json',
		app: 'app'
	},

	shim: {
		ng: {exports: 'ng'},
		angular: {exports: 'angular'},
		ngAnimate: {deps: ['angular']}
	}
});

define(['app']);