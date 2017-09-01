const express = require("express");
const work = require("./routes/work");
const article = require("./routes/article");
require('dotenv').config()

const port = process.env.PORT || 1337;
const app = express();

app.set("view engine", "pug");
app.use("/jobber", work);
app.use("/artikkel", article);
app.get("/", (req, res) => res.json({ message: "Hey ho" }));

app.listen(port);
