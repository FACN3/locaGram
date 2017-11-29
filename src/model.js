const data = require('./db/locations.json');
const http = require('http');

const autocomplete = (searchterm) => {
  const newArr = [];
  data.every((element) => {
    if(newArr.length==10){
     return false;
   }
   if (element.indexOf(searchterm)==0){
     newArr.push(element);
   }
   return true;
 })
 return newArr;
}


const instaLoc = (searchterm) =>{
  //https://api.instagram.com/v1/locations/{location-id}/media/recent?access_token=ACCESS-TOKEN
}

const instaXy = (searchterm) =>{
  //https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=ACCESS-TOKEN
  const apiLink = `https://api.instagram.com/v1/locations/search?${searchterm}&access_token=ACCESS-TOKEN`
}

module.exports= {autocomplete}
