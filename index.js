const express = require("express");
const { connect } = require("./db");
const app = express();

const runServer = async () => {
	await connect();

	const PORT = parseInt(process.env.PORT, 10) || 3001;

	app.use("/api/v1/portfolios", require("./routes/portfolios"));

	app.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log(PORT, "で起動してるよ〜！");
	});
};

runServer();
