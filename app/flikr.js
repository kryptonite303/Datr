var request = require('request');

var Flikr = function() {
	this.search = function(text, callback) {
		request('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=61bf2610c225ae34f1f845c2a10e3544&format=json&safe_search=3&text=' + text, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				body = body.substring(14)
				body = body.substring(0, body.length - 1);
				var json = JSON.parse(body);
				var index = Math.floor((Math.random() * 50) + 1);
				var results = json.photos.photo[index];
				return callback(null, results);
			}
		})
	}

	this.getURL = function(photo, callback) {
		var id = photo.id;
		var secret = photo.secret;
		var server = photo.server;
		var farm = photo.farm;
		var result = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
		return callback(null, result);
	}
}
module.exports = Flikr;