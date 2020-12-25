const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioScema = new Schema({
	title: { type: String },
	description: String,
});

module.exports = mongoose.model("Portfolio", portfolioScema);
