const express = require('express');
const apicache = require('apicache');
const work = require('./routes/work');
const article = require('./routes/article');
const pages = require('./routes/pages');
const service = require('./routes/service');
const compression = require('compression');
require('dotenv').config();

const cache = apicache.middleware;
const prodPort = process.geteuid();
const devPort = 1337;
const port = prodPort;
const app = express();

app.set('view engine', 'pug');
app.use(compression());
app.use(cache('1 hour'));
app.use(express.static('public'));
app.use('/jobber', work);
app.use('/aktuelt', article);
app.use('/blogg', article);
app.use('/tjenester', service);
app.get('*', pages);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
