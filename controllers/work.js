const axios = require("axios");

exports.findOne = async (req, res, next, id) => {
  console.log();
  const response = await axios(
    `${process.env.API_URL}wp/v2/jobber/${id}`
  );

  req.work = response.data;
  next();
};

exports.show = (req, res) => {
  res.render("work", req.work);
};
