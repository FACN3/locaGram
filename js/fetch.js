function fetch(url,callBack){
  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    console.log('readyState' + xhr.readyState);
    console.log('status' + xhr.status);
    if(xhr.readyState == 4 && xhr.status != 200){
      callBack(true);
    }

    if(xhr.readyState == 4 && xhr.status == 200){

      console.log('responseText' + xhr.responseText)
      callBack(null, JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET",url);
  xhr.send();
}
