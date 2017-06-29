const express = require("express");
const article = require("./routes/article");

const port = process.env.PORT || 1337;
const app = express();

app.set("view engine", "pug");

app.use("/article", article);

app.get("/", (req, res) => res.json({ message: "Hey ho" }));

app.listen(port);
