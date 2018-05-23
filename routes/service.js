const express = require('express');
const { findOne, show } = require('../controllers/article');

const service = express();

service.use((req, res, next) => {
  req.apiPath = 'pages';
  next();
});
service.param('slug', findOne);
service.get('/:slug', show);

module.exports = service;
