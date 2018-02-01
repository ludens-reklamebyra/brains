const express = require('express');
const apicache = require('apicache');
const work = require('./routes/work');
const article = require('./routes/article');
const pages = require('./routes/pages');
const compression = require('compression');
require('dotenv').config();

const cache = apicache.middleware;
const devPort = 1337;
const prodPort = process.getuid();

// Remember to change to prodPort when deploying.
const port = prodPort;
const app = express();

app.set('view engine', 'pug');
app.use(compression());
app.use(cache('1 hour'));
app.use(express.static('public'));
app.use('/jobber', work);
app.use('/aktuelt', article);
app.get('*', pages);

app.listen(port);
