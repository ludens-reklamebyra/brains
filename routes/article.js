const express = require("express");
const { findOne, show } = require("../controllers/article");

const article = express();

article.param("id", findOne);
article.get("/:id", show);

module.exports = article;
