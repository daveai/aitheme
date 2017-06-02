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