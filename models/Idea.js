const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogContentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	// user: {
	// 	type: String,
	// 	required: true
	// },
	date: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('logcontent', LogContentSchema);