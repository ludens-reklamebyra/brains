const express = require('express');
const { findOne, showPage } = require('../controllers/article');

const pages = express();

pages.set('view engine', 'pug');
pages.use((req, res, next) => {
  req.apiPath = 'pages';
  next();
});
pages.param('slug', findOne);
pages.get('/pakkelosninger', (req, res) => res.render('package'));
pages.get('/:slug', showPage);
pages.get('*', (req, res) => res.render('index'));

module.exports = pages;
