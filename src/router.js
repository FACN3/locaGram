const { staticfiles, heandleError, apiHandler } = require('./handlers');

const router = (req, res) => {
  console.log(req.url.includes('#'));

  if (req.url.includes('/model')) {
    apiHandler(req, res);
  } else if (req.url !== '404') {
    staticfiles(req, res);
  } else {
    heandleError('404, page not found', req, res);
  }
};

module.exports = router;
