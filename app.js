require('./assets/css/style');
require('./assets/css/responsive');
require('owl.carousel/dist/assets/owl.carousel.css');
require('bootstrap/dist/css/bootstrap.css');
require('./assets/css/font-awesome.css');
var $ = require('jquery');
window.$ = $;
global.jQuery = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
require('bootstrap');
var router = Backbone.Router.extend({
	routes: {		
		'':'openHomeView',
		'home': 'openHomeView'
	},

	initialize: function() {
	},

	openHomeView: function() {
		var MainView = require('./views/main');
		new MainView().render();
	}
});
new router();
Backbone.history.start({pushState: true})
