const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

exports.getPortfolio = async (req, res) => {
	const portfolios = await Portfolio.find({});
	return res.json(portfolios);
};
