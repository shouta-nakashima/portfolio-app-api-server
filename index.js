const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT, 10) || 3001;

app.get("/test", (req, res) => {
	return res.json({ message: "test reading now!!!" });
});

app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(PORT, "で起動してるよ〜！");
});
