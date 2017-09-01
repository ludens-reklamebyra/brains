const axios = require("axios");

exports.findOne = async (req, res, next, slug) => {
  const response = await axios(
    `${process.env.API_URL}wp/v2/jobber/?slug=${slug}`
  );

  req.work = response.data[0];
  next();
};

exports.show = (req, res) => {
  res.render("work", req.work);
};
