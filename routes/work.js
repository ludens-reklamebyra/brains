const express = require("express");
const { findOne, show } = require("../controllers/work");

const work = express();

work.param("slug", findOne);
work.get("/:slug", show);

module.exports = work;
