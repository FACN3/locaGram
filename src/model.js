const data = require('./db/locations.json');
const request = require('request');
const heandleError = require('./handlers');

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

const apiManager = (lat, lng, instaToken, cb) => {
  instaXy(lat, lng, instaToken, (err, locationid, instaToken) => {
    if (err) {
      console.log('err');
    }
    instaLoc(locationid, instaToken, cb);
  });
};
const instaXy = (lat, lng, instaToken, cb) => {
  //https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351&access_token=ACCESS-TOKEN
  const apiLink = `https://api.instagram.com/v1/locations/search?lat=${
    lat
  }&lng=${lng}&access_token=${instaToken}`;
  console.log('instaXY link is ', apiLink);
  request(apiLink, (err, res, body) => {
    if (err) {
      cb(err);
      return;
    }
    let json = JSON.parse(body);
    const locationid = filterLocations(json);
    cb(null, locationid, instaToken);
    // addToDb(json);
  });
};

const instaLoc = (locationid, instaToken, cb) => {
  const locationLink = `https://api.instagram.com/v1/locations/${
    locationid
  }/media/recent?access_token=${instaToken}`;
  console.log('instaLoc link is ', locationLink);
  request(locationLink, (err, res, body) => {
    if (err) {
      cb('err with', err);
      return;
    }
    let json = JSON.parse(body);
    // console.log(body)
    cb(null, json);
  });
  //https://api.instagram.com/v1/locations/{location-id}/media/recent?access_token=ACCESS-TOKEN
};


const filterLocations = instaDataObj => instaDataObj.data[0].id;

module.exports = { instaLoc, instaXy, apiManager };
