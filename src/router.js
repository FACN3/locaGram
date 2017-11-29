const {staticfiles,heandleError,apiHandler} = require('./handler')

function router(req,res) => {

  if (req.url.includes('/model.js')){
    apiHandler(req,res);
  }
  else if (req.url!=='404'){
      staticfiles(req,res);
    }
  else{
      heandleError("404, page not found", req, res)
    }




module.exports = router
