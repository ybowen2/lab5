var data = require("../data.json");

exports.addFriend = function(req, res) {
	
	var newfrnd = {
		"name": req.query.name,
		"description": req.query.description,
		"image":data.query.imageURL
	}

	data["friends"].push(newFriend);
	res.render("index", data);
}

