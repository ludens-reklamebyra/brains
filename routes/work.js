const express = require("express");
const { findOne, show } = require("../controllers/work");

const work = express();

work.param("id", findOne);
work.get("/:id", show);

module.exports = work;
