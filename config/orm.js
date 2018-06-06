var cxn = require("../config/connection");

var sel = function selectAll(){
	var p1 = new Promise(function(resolve,reject){
		cxn.query("SELECT * FROM burgers", function(err, res) {
			if (err) throw err;
		    resolve(res);
		});
	})
	return p1;
}

var insrt = function insertOne(burgerName){
	var p1 = new Promise(function(resolve,reject){
  		var query = cxn.query(
	    	"INSERT INTO burgers SET ?",
	    	{
	      		burger_name: burgerName
	    	},
	    	function(err, res) {
	      		resolve(res);
	    	}
	 	 );
	})
	return p1;
}

var update = function updateOne(id, devoured){
	var p1 = new Promise(function(resolve,reject){
		  var query = cxn.query(
		    "UPDATE burgers SET ? WHERE ?",
		    [
		      {
		        devoured: devoured
		      },
		      {
		        id: id
		      }
		    ],
		    function(err, res) {
		     	resolve(res);
		    }
		  );
	  })
	return p1;
}

var orm = {};
orm.select = sel;
orm.insert = insrt;
orm.update = update;

module.exports = orm;
