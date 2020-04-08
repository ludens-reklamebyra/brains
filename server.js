const express = require('express');
require('dotenv').config();

//const devPort = 4000;
const prodPort = process.getuid();

// Remember to change to prodPort when deploying.
const port = prodPort;
const app = express();

app.get('*', (req, res) => {
  res.redirect('https://ludensgruppen.no' + req.path);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
