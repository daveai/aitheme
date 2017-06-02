var slider = require("../templates/slider.html");
module.exports = Backbone.View.extend({
	initialize:function(){		
	},
	template:slider,
	el:"#app",
	render:function(){
		$(this.el).append(this.template);
	}
});