var bower_c = '../bower_components/'

requirejs.config({
	baseUrl: 'scripts',

	paths: {
		angular: bower_c + 'angular/angular',
		text: bower_c + 'requirejs-text/text',
		json: bower_c + 'requirejs-plugins/src/json',
		app: 'app'
	},

	shim: {
		angular: {exports: 'angular'}
	}
});

define(['app']);