const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioScema = new Schema({
	title: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	website: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	jobTitle: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Portfolio", portfolioScema);
