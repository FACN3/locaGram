const data = require('./db/locations.json');

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



module.exports= {autocomplete}
