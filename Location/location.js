// function initMap() {

//     var pos = {
//         lat: 42.1,
//         lng: -74.1
//     };

//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 42, lng: -74 },
//         zoom: 6
//     });
//     var infoWindow = new google.maps.InfoWindow({ map: map });

//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position, pos) {
//             pos.lat = position.coords.latitude;
//             pos.lng = position.coords.longitude;

//             map.setCenter(pos);
//         }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }

//     var marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//         title: 'Release Source'
//     });
// }