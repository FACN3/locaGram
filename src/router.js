const {staticfiles,heandleError,apiHandler} = require('./handler')

function router(req,res) => {

  if (req.url.includes('/model')){
    apiHandler(req,res);
  }
  else if (req.url!=='404'){
      staticfiles(req,res);
    }
  else{
      heandleError("404, page not found", req, res)
    }


// const queries = {
//   "autocomplete" : autocomplete,
//   "instaLoc" : instaLoc,
//   "instaXy" : instaXy
// }[query]

module.exports = router
