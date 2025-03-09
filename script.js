var map = L.map('map').setView([27.722602462728965, 85.36299947942256], 16.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: 'assets/icon-location.svg',

  iconSize: [52, 64], // size of the icon
  iconAnchor: [27.722602462728965, 85.36299947942256], // point of the icon which will correspond to marker's location
});

L.marker([27.722602462728965, 85.36299947942256], { icon: greenIcon }).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
