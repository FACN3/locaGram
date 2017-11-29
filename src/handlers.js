const { autocomplete,instaLoc,instaXy } = require('./model');
const url = require('url');
const fs = require('fs');
// const path = require('path');

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
  fs.readFile(`${__dirname}/../public/${urlFile}`, (error, file) => {
    if (error) {
      heandleError(error, req, res);
    } else {
      res.writeHead(200, {'Content-Type': extensionType });
      res.end(file);
    }
  });
};

const heandleError = (error, request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end(`Sorry, an error has occurred${error}`);
};

const apiHandler = req => {
  const urlObject = url.parse(req.url, true);
  const qsKey = urlObject.query['q'];
  const queries = {
    'autocomplete': autocomplete,
    'instaLoc': instaLoc,
    'instaXy': instaXy
  }[qsKey];
queries(urlObject.query['lat'],urlObject.query['lng']);
};

module.exports = { staticfiles, apiHandler };
