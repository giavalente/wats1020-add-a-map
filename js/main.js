/* ==========================================================================
   Author's JS :) 
   ========================================================================== */

//When DOM is ready, run javascript
 $(document).ready(function() {   
   
//Define map
var map = L.map('map-container').setView([46.852, -121.760], 13);
   
//Add Tile Layers for Open Streets, Satellite, and Map View
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZ2lhdmFsZW50ZSIsImEiOiJjajAxdXU2Z3EwNnhnMnZxcWR4aHh4bGpmIn0.zAxuXBq_3fakW6U-wx_9uw'
});
    
var drawLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.mapbox-terrain-v1',
    accessToken: 'pk.eyJ1IjoiZ2lhdmFsZW50ZSIsImEiOiJjajAxdXU2Z3EwNnhnMnZxcWR4aHh4bGpmIn0.zAxuXBq_3fakW6U-wx_9uw'
});

var mapLayers = {
    "Open Street Maps": osm,
    "Satellite": satLayer,
    "Map View": drawLayer,
}

//Add layer controls to map
L.control.layers(mapLayers).addTo(map);
osm.addTo(map);
      
// Customize Map to show markers with popups at no fewer than 3 interesting locations.
var peak = new L.marker([46.852, -121.760]);
   peak.addTo(map);
   peak.bindPopup(
     'Welcome to Mt. Rainier! This peak is 4,392 feet high.'
   );   
   
 var liberty = L.marker([46.8629, -121.7748]);
   liberty.addTo(map);
   liberty.bindPopup(
     'The lowest of the three summits is Liberty Cap.'
   );  
   
 var psuccess = L.marker([46.8459412, -121.7675967]);
   psuccess.addTo(map);
   psuccess.bindPopup(
     'Point Success is the second highest summit on Mt. Rainier!'
   );   
   
 //Function to smooth-scroll from navigation links
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
});

 });
   

   