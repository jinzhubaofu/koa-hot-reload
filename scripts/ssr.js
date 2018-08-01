const express = express();
const app = express();
const fs = require('fs');
const fetch = require('node-fetch');
const vm = require('vm');

const MAP = {
  '/': 'main'
};

app.use(async (req, res, next) => {

  let page = MAP[req.path];

  if (!page) {
    next();
    return;
  }

  let bundleURL = `http://localhost:8080/${page}.js`;
  let response = await fetch(bundleURL);
  let source = await response.text();

  fs.writeFileSync(
    path.join(__dirname, '../bundles', `${page}.js`)
  );


});
