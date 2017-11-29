const data = require('./db/locations.json');
const request = require('request');

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


const instaLoc = (searchterm) =>{
  console.log('foo');
  //https://api.instagram.com/v1/locations/{location-id}/media/recent?access_token=ACCESS-TOKEN
}

const instaXy = (lat,lng) =>{
console.log('foo');
  // request()
  //https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=ACCESS-TOKEN
  const apiLink =`https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${lng}&access_token=31837141.910c41c.9baa8bcdf5b6412fb89b1f034868b79e`
}

module.exports= {instaLoc,instaXy}
//code 76f09b861b9840849e2d12ec575b64b1


curl \-F 'client_id=910c41cbbdea4d48b893dc58950d9'
-F 'client_secret=64d55271d47f448daba3b915f86ea875'
-F 'grant_type=authorization_code'
-F 'redirect_uri=http://locagram.herokuapp.com/redirect'
-F 'code=76f09b861b9840849e2d12ec575b64b1'
-F 'scope=basic+public_content+follower_list+comments+relationships+likes'    
https://api.instagram.com/oauth/access_token
