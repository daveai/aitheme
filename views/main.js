require('../assets/css/style');
require('../assets/css/responsive');
require('owl.carousel/dist/assets/owl.carousel.css');
require('bootstrap/dist/css/bootstrap.css');
var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var template = require('../templates/header.html');
module.exports = Backbone.View.extend({
	initialize:function(){
	},
	el:"#app",
	events:{
		'click h1':'showAlert'
	},
	template:template({name:"joe"}),
	render:function(){
		$(this.el).append(this.template);
	},
	showAlert:function(event){
		console.log(event)
	}
});