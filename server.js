const express = require('express');
const work = require('./routes/work');
const article = require('./routes/article');
const pages = require('./routes/pages');
require('dotenv').config();

const port = process.getuid() || 1337;
//const port = 1337;
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/jobber', work);
app.use('/artikkel', article);
app.get('*', pages);

app.listen(port);
