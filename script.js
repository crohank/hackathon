let map;
let vij = { lat: 16.5062 , lng: 80.6480 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: vij,
    zoom: 20,
  });
}


