const express = require("express");
const { findOne, show } = require("../controllers/article");

const article = express();

article.use((req, res, next) => { req.apiPath = 'posts'; next(); });
article.param("slug", findOne);
article.get("/:slug", show);

module.exports = article;
