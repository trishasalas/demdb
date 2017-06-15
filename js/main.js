const DemDbMap = L.map('tulsa-map').setView([36.1191206, -95.9290008], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  accessToken: 'pk.eyJ1IjoidHJpc2hhc2FsYXMiLCJhIjoiY2ozdGs5NGc3MDBleTMzbng4MW1jY2lnMCJ9.mYVZbziz_ABi6jXXHWqyhg',
  id: 'mapbox.streets'
}).addTo(DemDbMap);

const votingDistrictsLayer = [{
  "type": "Feature",
  "properties": {
    "STATEFP10": "40",
    "COUNTYFP10": "143",
    "VTDST10": "75",
    "GEOID10": "4014375",
    "VTDI10": "P",
    "NAME10": "75",
    "NAMELSAD10": "Voting District 75",
    "LSAD10": "V1",
    "MTFCC10": "G5240",
    "FUNCSTAT10": "S",
    "ALAND10": 831733,
    "AWATER10": 0,
    "INTPTLAT10": "+36.1285519",
    "INTPTLON10": "-095.9354475" },
  "geometry": {
    "type":
      "Polygon",
    "coordinates": [[
       [ -95.936998, 36.133278 ],
       [ -95.936398, 36.133277 ],
       [ -95.935883, 36.133303 ],
       [ -95.935348, 36.133276 ],
       [ -95.934813, 36.133267 ],
       [ -95.933923, 36.133286 ],
       [ -95.933194, 36.1333 ],
       [ -95.932958, 36.133313 ],
       [ -95.93254, 36.133297 ],
       [ -95.932112, 36.133281 ],
       [ -95.931844, 36.133285 ],
       [ -95.931437, 36.133269 ],
       [ -95.93145, 36.132791 ],
       [ -95.931411, 36.131809 ],
       [ -95.931423, 36.130939 ],
       [ -95.931435, 36.130079 ],
       [ -95.931426, 36.129201 ],
       [ -95.931428, 36.128323 ],
       [ -95.931378, 36.127375 ],
       [ -95.931433, 36.126489 ],
       [ -95.931352, 36.125888 ],
       [ -95.931108, 36.125406 ],
       [ -95.930502, 36.124599 ],
       [ -95.930411, 36.122968 ],
       [ -95.930481, 36.122526 ],
       [ -95.930493, 36.122373 ],
       [ -95.930499, 36.122342 ],
       [ -95.930516, 36.122243 ],
       [ -95.930985, 36.122412 ],
       [ -95.931397, 36.12256 ],
       [ -95.933763, 36.123452 ],
       [ -95.936108, 36.124327 ],
       [ -95.937583, 36.124874 ],
       [ -95.940333, 36.125926 ],
       [ -95.940334, 36.126069 ],
       [ -95.940335, 36.1262 ],
       [ -95.940296, 36.126546 ],
       [ -95.940326, 36.127865 ],
       [ -95.940342, 36.12896 ],
       [ -95.94033, 36.13009 ],
       [ -95.940338, 36.131163 ],
       [ -95.940293, 36.131903 ],
       [ -95.940355, 36.133236 ],
       [ -95.939194, 36.133299 ],
       [ -95.938627, 36.133289 ],
       [ -95.938047, 36.133323 ],
       [ -95.936998, 36.133278 ]
    ]]
  }
}];

const myStyle = {
  "color": "#ff7800",
  "weight": 2,
  "opacity": 0.5
};

L.geoJSON(votingDistrictsLayer, {
  style: myStyle
}).addTo(DemDbMap);
