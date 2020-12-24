const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT, 10) || 3001;

app.use("/api/v1/portfolios", require("./routes/portfolios"));

app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(PORT, "で起動してるよ〜！");
});
