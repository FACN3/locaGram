function initMap() {
  if (window.location.href.indexOf('access_token') > -1) {
    var markerArr = [];
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: uluru
    });

    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(infoWindow.setPosition);
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found');
          infoWindow.open(map);
          map.setCenter(pos);
        },
        function() {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }

    function setMarkertoNull() {
      markerArr.forEach(function(e) {
        e.setMap(null);
      });
    }
    function placeMarker(position, map, fetch) {
      var marker = new google.maps.Marker({
        position: position,
        map: map
      });
      markerArr.push(marker);
      map.panTo(position);
      var mapXy = [position.lat(), position.lng()];
      console.log(position.lat(), position.lng());
      fetch(mapXy, creatingUl);
    }

    map.addListener('dragend', function() {
      if (markerArr.length !== 0) {
        setMarkertoNull();
      }
      placeMarker(map.getCenter(), map);
    });
    map.addListener('click', function(e) {
      if (markerArr.length !== 0) {
        setMarkertoNull();
      }
      placeMarker(e.latLng, map);
    });
  } else {
    window.location =
      'https://api.instagram.com/oauth/authorize/?client_id=b2156f56dbf24b9cb4a1fc02118d0991&redirect_uri=https://facn3locagram.herokuapp.com/&response_type=token';
  }
}
