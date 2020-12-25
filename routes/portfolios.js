const express = require("express");
const router = express.Router();
const { getPortfolio, getPortfolioById } = require("../controllers/portfolios");

router.get("", getPortfolio);
router.get("/:id", getPortfolioById);

module.exports = router;
