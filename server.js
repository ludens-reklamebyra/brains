const express = require('express');
const apicache = require('apicache');
const work = require('./routes/work');
const article = require('./routes/article');
const pages = require('./routes/pages');
const compression = require('compression');
require('dotenv').config();

const cache = apicache.middleware;

const port = process.getuid() || 1337;
//const port = 1337;
const app = express();

app.set('view engine', 'pug');
app.use(compression());
app.use(cache('1 hour'));
app.use(express.static('public'));
app.use('/jobber', work);
app.use('/artikkel', article);
app.get('*', pages);

app.listen(port);
