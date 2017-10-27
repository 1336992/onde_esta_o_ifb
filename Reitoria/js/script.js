/*
$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});
*/

/*Mapa do Leaflet*/

$(function () { 
 
  
});


var map;
// var ajaxRequest;
// var plotlist;
// var plotlayers=[];

//function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(-15.7839882,-47.8794432), 10 );
  map.addLayer(osm);
  
  var reitoria =new L.marker([-15.7539882,-47.8794432]).addTo(map);
  reitoria.bindPopup("<b>Você está aqui!!!</b><br>IFB - Campus Brasília<br> Reitoria").openPopup();
  
  var ceilandia =new L.marker([-15.8430268,-48.0981935]).addTo(map);
  ceilandia.bindPopup("Campus Ceilândia<br><a onclick=\"myNavFunc(-15.8430268,-48.0981935)\">Ir para este campus!</a>");
  
  var estrutural =new L.marker([-15.7936473,-47.969377]).addTo(map);
  estrutural.bindPopup("Campus Estrutural<br><a onclick=\"myNavFunc(-15.7936473,-47.969377)\">Ir para este campus!</a>");
  
  var gama =new L.marker([-15.992952, -48.053241]).addTo(map);
  gama.bindPopup("Campus Gama<br><a onclick=\"myNavFunc(-15.992952, -48.053241)\">Ir para este campus!</a>");
  
  var planaltina =new L.marker([-15.657870, -47.694318]).addTo(map);
  planaltina.bindPopup("Campus Planaltina<br><a onclick=\"myNavFunc(-15.657870, -47.694318)\">Ir para este campus!</a>");
  
  var riacho =new L.marker([-15.881435,-48.008822]).addTo(map);
  riacho.bindPopup("Campus Riacho Fundo<br><a onclick=\"myNavFunc(-15.881435,-48.008822)\">Ir para este campus!</a>");
  
  var samambaia =new L.marker([-15.862794, -48.053453]).addTo(map);
  samambaia.bindPopup("Campus Samambaia<br><a onclick=\"myNavFunc(-15.862794, -48.053453)\">Ir para este campus!</a>");
  
  var sebastiao =new L.marker([-15.891461, -47.780270]).addTo(map);
  sebastiao.bindPopup("Campus São Sebastião<br><a onclick=\"myNavFunc(-15.891461, -47.780270)\">Ir para este campus!</a>");
  
  var taguatinga =new L.marker([-15.794215, -48.101877]).addTo(map);
  taguatinga.bindPopup("Campus Taguatinga<br><a onclick=\"myNavFunc(-15.794215, -48.101877)\">Ir para este campus!</a>");
  
  var taguaCentro =new L.marker([-15.840987, -48.046987]).addTo(map);
  taguaCentro.bindPopup("Campus Taguatinga Centro<br><a onclick=\"myNavFunc(-15.840987, -48.046987)\">Ir para este campus!</a>");
//}


// var mymap = L.map("map").setView([-15.7839882,-47.8794432], 10 );

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam92aWNlcnMiLCJhIjoiY2o0b2VhNnVxMDlpbDMwdGNmYzN3cjhlMSJ9.fJHiWp2VPFnllH2wlPVwvg', {
//   maxZoom: 18,
//   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//     '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//     'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//   id: 'mapbox.streets',
// }).addTo(mymap);



// var reitoria =L.marker([-15.7539882,-47.8794432]).addTo(mymap);
// reitoria.bindPopup("<b>Você está aqui!!!</b><br>IFB - Campus Brasília<br> Reitoria").openPopup();

// var ceilandia =L.marker([-15.8430268,-48.0981935]).addTo(mymap);
// ceilandia.bindPopup("Campus Ceilândia<br><a onclick=\"myNavFunc(-15.8430268,-48.0981935)\">Ir para este campus!</a>");

// var estrutural =L.marker([-15.7936473,-47.969377]).addTo(mymap);
// estrutural.bindPopup("Campus Estrutural<br><a onclick=\"myNavFunc(-15.7936473,-47.969377)\">Ir para este campus!</a>");

// var gama =L.marker([-15.992952, -48.053241]).addTo(mymap);
// gama.bindPopup("Campus Gama<br><a onclick=\"myNavFunc(-15.992952, -48.053241)\">Ir para este campus!</a>");

// var planaltina =L.marker([-15.657870, -47.694318]).addTo(mymap);
// planaltina.bindPopup("Campus Planaltina<br><a onclick=\"myNavFunc(-15.657870, -47.694318)\">Ir para este campus!</a>");

// var riacho =L.marker([-15.881435,-48.008822]).addTo(mymap);
// riacho.bindPopup("Campus Riacho Fundo<br><a onclick=\"myNavFunc(-15.881435,-48.008822)\">Ir para este campus!</a>");

// var samambaia =L.marker([-15.862794, -48.053453]).addTo(mymap);
// samambaia.bindPopup("Campus Samambaia<br><a onclick=\"myNavFunc(-15.862794, -48.053453)\">Ir para este campus!</a>");

// var sebastiao =L.marker([-15.891461, -47.780270]).addTo(mymap);
// sebastiao.bindPopup("Campus São Sebastião<br><a onclick=\"myNavFunc(-15.891461, -47.780270)\">Ir para este campus!</a>");

// var taguatinga =L.marker([-15.794215, -48.101877]).addTo(mymap);
// taguatinga.bindPopup("Campus Taguatinga<br><a onclick=\"myNavFunc(-15.794215, -48.101877)\">Ir para este campus!</a>");

// var taguaCentro =L.marker([-15.840987, -48.046987]).addTo(mymap);
// taguaCentro.bindPopup("Campus Taguatinga Centro<br><a onclick=\"myNavFunc(-15.840987, -48.046987)\">Ir para este campus!</a>");



function myNavFunc(lat, long){
  // Se for da Apple
  if( (navigator.platform.indexOf("iPhone") != -1) 
      || (navigator.platform.indexOf("iPod") != -1)
      || (navigator.platform.indexOf("iPad") != -1))
       window.open("comgooglemaps://?daddr="+lat+","+long+"&amp;ll=");
  else{
       window.open("http://maps.google.com/maps?daddr="+lat+","+long+"&amp;ll=");
        
  }  
}
//http://maps.google.com/maps?daddr=-15.840987,-48.046987&amp;ll=