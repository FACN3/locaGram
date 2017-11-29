const {autocomplete,instaLoc,instaXy} = require('./model');
const url = require('url');
const fs = require('fs');
const path = require('path');

const staticfiles = (req, res) => {
  let urlFile = '';
  if (req.url === '/') {
    urlFile = '/index.html';
  } else {
    urlFile = req.url;
  }
  const extensionType = {
    html: 'text/html',
    css: 'test/css',
    js: 'javascript/application',
    ico: 'image/x-icon',
    jpeg: 'image/x-icon'
  }[url.split('.')[1]];

  fs.readFile(`${__dirname}/../public/${urlFile}`, (error, file) => {
    if (error) {
      heandleError(error, request, response)
    } else {
      res.write(200, {
        'Content-Type': extensionType
      })
      res.end(file)
    }
  })
}
//API SEARCHES WILL LOOK LIKE THIS : LOCAGRAM.COM/MODEL.JS?autocomplete=TRUE&SEARCH=SEARCHVALUE

//foo=bar&abc=xyz&abc=123

const apiHandler = (req,res)=>{
  const urlObject = url.parse(req.url,true)
  const qsKey = Object.keys(urlObject.query)[0]
  const queries = {
      'autocomplete' : autocomplete,
      'instaLoc' : instaLoc,
      'instaXy' : instaXy
    }[qsKey]
  queries[qsKey](urlObject.query['search']);
}

module.exports = {staticfiles, apiHandler}
