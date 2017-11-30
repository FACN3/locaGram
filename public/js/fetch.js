function fetch(url,callBack){
  console.log('fetch url is ',url)
  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    console.log('readyState' + xhr.readyState);
    console.log('status' + xhr.status);
    if(xhr.readyState == 4 && xhr.status != 200){
      callBack(xhr.responseText);
    }

    if(xhr.readyState == 4 && xhr.status == 200){

      console.log('responseText' + xhr.responseText)
      callBack(null, JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET",url);
  xhr.send();
}

function creatingUl(err,arr){
  console.log('creating instagram template');
}
