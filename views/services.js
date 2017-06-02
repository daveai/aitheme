var services = require("../templates/services.html");
module.exports = Backbone.View.extend({
	initialize:function(){
	},
	template:services,
	el:"#app",
	render:function(){
		$(this.el).append(this.template);
	}
});