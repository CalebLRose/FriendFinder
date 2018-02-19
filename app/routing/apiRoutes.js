var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function(req,res) {
		res.json(friends);
		console.log(friends);
	});

	app.post("/api/new", function(req,res) {
		var newFriend = req.body;
		var newScore = newFriend.scores;
		var total;
		var best = 1000;
		var index = -1;

		for (var i = 0; i < friends.length; i++) {
			total = 0;
			for (var j = 0; j < friends[i].length; j++) {
				var diff = Math.abs(parseInt(newScore[j]) - parseInt(friends[i].scores[j]));
				total+=diff;
			}
			if(total < best) {
				best = total;
				index = i;
			}
		}
		console.log("bestie: "+friends[index]);
		friends.push(newFriend);
		res.json(friends[index]);
	});
};



