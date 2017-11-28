const qs = require('qs');
const url = require('url');
const fs = require('fs');
const path = require('path');

staticfiles(req, res) => {
  if (req.url === '/') {
    let url = '/index.html';
  } else {
    let url = req.url;
  }
  const extensionType = {
    html: 'text/html',
    css: 'test/css',
    js: 'javascript/application',
    ico: 'image/x-icon',
    jpeg: 'image/x-icon'
  }[url.split('.')[1]];

  fs.readFile(_dirname + "/../public/" + url, function(error, file) {
    if (error) {
      heandleError(error, request, response)
    } else {
      res.write(200, {
        "Content-Type": extensionType
      })
      res.end(file)
    }
  })
}

apiHandler({url},res)=>{
  const queries = {
    "autocomplete" : autocomplete,
    "instaLoc" : instaLoc,
    "instaXy" : instaXy
  }[query]

}
