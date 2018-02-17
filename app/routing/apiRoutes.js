var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function(req,res) {
		res.json(friends);
		console.log(friends);
	});

	app.post("/api/friends", function(req,res) {
		var newFriend = req.body;
		friends.push(newFriend);
	});
};



