function initMap() {
   var myLatLng = {lat: 51.51, lng: -0.126667};
   var mapDiv = document.querySelector('.map__google');
   var map = new google.maps.Map(mapDiv, {
     center: myLatLng,
     zoom: 11
   });
   var marker = new google.maps.Marker({
     position: myLatLng,
     map: map
   });
}
