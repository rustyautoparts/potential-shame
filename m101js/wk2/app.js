var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
	if (err) throw err;

	var records = db.collection('data');
	var cursor = records.find({});
	var lastState = undefined;
	cursor.sort([['State', 1], ['Temperature', -1]]);
	cursor.each(function(err, doc) {
		if (err) throw err;

		console.dir(doc);
		return db.close();

		if(doc == null) {
			return db.close();
		}
	});
});
