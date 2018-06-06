var orm = require("../config/orm")

var model = {

	all: function() {
		return orm.select();
	},

	create: function(burgerName){
		return orm.insert(burgerName);
	},

	update: function(burgerId,devoured){
		return orm.update(burgerId,devoured);
	}

}

module.exports = model;