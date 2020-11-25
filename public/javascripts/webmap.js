(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

  var mymap = L.map('mapid',{ drawControl: true }).setView(latlng, 13)
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
  }).addTo(mymap);

  
  // var circle = L.circle(latlng, {
  //   color: '#7997a1',
  //   fillColor: '#add8e6',
  //   fillOpacity: 0.5,
  //   radius: 500
  // }).addTo(mymap);

  mymap.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
        layer = e.layer;
    if (type === 'marker') {
        // Do marker specific actions
    }
    // Do whatever else you need to. (save to db; add to map etc)
    mymap.addLayer(layer);
  });

  var marker = L.marker(latlng).addTo(mymap);
 
});



},{}]},{},[1]);
