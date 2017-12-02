const { autocomplete, instaLoc, instaXy ,apiManager } = require('./model');
const url = require('url');
const fs = require('fs');

const staticfiles = (req, res) => {
  let urlFile = '';
  let extensionType = '';
  if (req.url === '/') {
    urlFile = '/index.html';
    extensionType = 'text/html';
  } else {
    urlFile = req.url;
    extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/json',
      ico: 'image/x-icon',
      jpeg: 'image/x-icon'
    }[urlFile.split('.')[1]];
  }
  fs.readFile(`${__dirname}/../public/${urlFile}`, (err, file) => {
    if (err) {
      heandleError(err, req, res);
    } else {
      res.writeHead(200, { 'Content-Type': extensionType });
      res.end(file);
    }
  });
};

const heandleError = (err, req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`Sorry, an error has occurred${err}`);
};

const apiHandler = (req, res) => {
  const urlObject = url.parse(req.url, true);
  const qsKey = urlObject.query['q'];


  var result = apiManager(
    urlObject.query['lat'],
    urlObject.query['lng'],
    urlObject.query['instaToken'],
    function(err, result) {
      if (err) {
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(JSON.stringify(result));
    }
  );
};

module.exports = { staticfiles, heandleError, apiHandler };
