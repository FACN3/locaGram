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
}

const instaXy = (lat,lng) =>{
console.log('foo');
  const apiLink =`https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${lng}&access_token=31837141.910c41c.9baa8bcdf5b6412fb89b1f034868b79e`
}

module.exports= {instaLoc,instaXy}
