const express = require("express");
const { findOne, show } = require("../controllers/article");

const work = express();

work.use((req, res, next) => { req.apiPath = 'jobber'; next(); });
work.param("slug", findOne);
work.get("/:slug", show);

module.exports = work;
