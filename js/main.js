const DemDbMap = L.map('tulsa-map').setView([36.1567935, -95.9983527], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  accessToken: 'pk.eyJ1IjoidHJpc2hhc2FsYXMiLCJhIjoiY2ozdGs5NGc3MDBleTMzbng4MW1jY2lnMCJ9.mYVZbziz_ABi6jXXHWqyhg',
  id: 'mapbox.streets'
}).addTo(DemDbMap);
