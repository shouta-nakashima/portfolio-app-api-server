const express = require("express");
const router = express.Router();
const { getPortfolio } = require("../controllers/portfolios");

router.get("", getPortfolio);

module.exports = router;
