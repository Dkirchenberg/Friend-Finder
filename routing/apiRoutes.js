var friendProfile = require("../app/data/friends.js");
var path = require("path");
var totalDifference = 0;


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        	

	        var bestMatch = {
				name: "",
				image: "",
				compatibleDifference: 2100
					};

			var userInfo 	= req.body;
			var userName 	= userInfo.name;
			var userImage 	= userInfo.image;
			var userScores 	= userInfo.scores;

			var totalDifference = 0;

        	for(var i = 0; i < [friends].length-1; i++){

        		totalDifference = 0;

        		for(var s = 0; s < 10; s++) {

        			totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friends[i].scores[s]));
        		
        				if (totalDifference <= bestMatch.friendDifference){

							bestMatch.name = friends[i].name;
							bestMatch.photo = friends[i].photo;
							bestMatch.compatibleDifference = totalDifference;
						}

		        	}
		        }

	       	friends.push(userInfo);

	       	res.json(bestMatch);

	     });

	};