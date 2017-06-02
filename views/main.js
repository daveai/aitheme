require('../assets/css/style');
require('../assets/css/responsive');
require('owl.carousel/dist/assets/owl.carousel.css');
require('bootstrap/dist/css/bootstrap.css');
require('../assets/css/font-awesome.css');
var $ = require('jquery');
window.$ = $;
global.jQuery = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
require('bootstrap');
var header = require('./shared/header');
var slider = require('./slider');
var services = require('./services');
module.exports = Backbone.View.extend({
	initialize:function(){
	},
	render:function(){
		new header().render();
		new slider().render();
		new services().render();
		$(window).scroll(function(event){
			console.log(event.pageY);
			$(".st-navbar").css("background-color","rgba(255,255,255,1)");
		})
	}
});