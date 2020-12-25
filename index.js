const express = require("express");
const app = express();
const config = require("./config/dev");

const mongoose = require("mongoose");
mongoose.connect(
	config.DB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("connect on DB!");
		}
	}
);

const PORT = parseInt(process.env.PORT, 10) || 3001;

app.use("/api/v1/portfolios", require("./routes/portfolios"));

app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(PORT, "で起動してるよ〜！");
});
