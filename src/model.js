const data = require('./db/locations.json');
const request = require('request');
const heandleError = require('./handlers')

const autocomplete = searchterm => {
  const newArr = [];
  data.every(element => {
    if (newArr.length == 10) {
      return false;
    }
    if (element.indexOf(searchterm) == 0) {
      newArr.push(element);
    }
    return true;
  });
  return newArr;
};


const instaLoc = (locationid,instaToken) =>{
  const locationLink = `https://api.instagram.com/v1/locations/${locationid}/media/recent?access_token=${instaToken}`
  console.log('instaLoc link is ',locationLink);
  request(locationLink,(err,res,body)=>{
    if (err){
      console.log('err with', err);
      return
    }
    let json = JSON.parse(body);
    // console.log(body)
  })
  //https://api.instagram.com/v1/locations/{location-id}/media/recent?access_token=ACCESS-TOKEN
}

const instaXy = (lat,lng,instaToken, req,res) =>{
  //https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=ACCESS-TOKEN
  const apiLink =`https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${lng}&access_token=${instaToken}`
  console.log('instaXY link is ',apiLink);
  request(apiLink, (err,res,body)=>{
    if(err){
      heandleError(err,req,res);
    }
    let json = JSON.parse(body);
    const locationid = filterLocations(json);
    instaLoc(locationid,instaToken);
    addToDb(json);
  })
}
const addToDb = (instaDataObj) =>{
  let newArr=[];
  instaDataObj.data.forEach(e =>{
    console.log(e.id);
    if(e.id!==0){
      newArr.push(e);
    }
  })
  console.log(newArr);
}

const filterLocations = (instaDataObj) => instaDataObj.data[0].id


module.exports= {instaLoc,instaXy}
//code 76f09b861b9840849e2d12ec575b64b1

//
// curl \-F 'client_id=910c41cbbdea4d48b893dc58950d9'
// -F 'client_secret=64d55271d47f448daba3b915f86ea875'
// -F 'grant_type=authorization_code'
// -F 'redirect_uri=http://locagram.herokuapp.com/redirect'
// -F 'code=76f09b861b9840849e2d12ec575b64b1'
// -F 'scope=basic+public_content+follower_list+comments+relationships+likes'
// https://api.instagram.com/oauth/access_token
