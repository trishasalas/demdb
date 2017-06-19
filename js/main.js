const DemDbMap = L.map('tulsa-map').setView([36.1191206, -95.9290008], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  accessToken: 'pk.eyJ1IjoidHJpc2hhc2FsYXMiLCJhIjoiY2ozdGs5NGc3MDBleTMzbng4MW1jY2lnMCJ9.mYVZbziz_ABi6jXXHWqyhg',
<<<<<<< Updated upstream
  id: 'mapbox.streets'
}).addTo(DemDbMap);

const zips = new L.GeoJSON.AJAX("geojson.json");

const myStyle = {
  "color": "#ff7800",
  "weight": 2,
  "opacity": 0.5
};

L.geoJSON(zips, {
  style: myStyle
=======
  id: 'mapbox.streets',
>>>>>>> Stashed changes
}).addTo(DemDbMap);
