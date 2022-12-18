
let map = L.map('map', { doubleClickZoom: false }).setView([44.6476, -63.5728], 13);
let markerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


map.on('dblclick', function(e) {
  marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(markerGroup);
  marker.bindPopup(`
  <button class="btn btn-outline-dark" type="submit" id="delete">Delete</button>
  `).openPopup();

});



$("#delete").on('click', function() {
  markerGroup.removeLayer(25);
});

console.log(markerGroup);