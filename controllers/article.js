const axios = require("axios");

exports.findOne = async (req, res, next, id) => {
  const response = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  req.article = response.data;
  next();
};

exports.show = (req, res) => {
  res.render("article", req.article);
};
