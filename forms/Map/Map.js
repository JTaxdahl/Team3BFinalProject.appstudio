/*
hmbMap.onclick=function(s){
  if (typeof(s) == "object") {   
    return
  } else {
  switch(s) {
case "List":
  ChangeForm(listView)
  break;
case "Calendar":
  ChangeForm(Calendar)
  break;
case "Map":
  ChangeForm(Map)
  break;
case "Login":
  ChangeForm(createLogin)
  break;
}
}
}

var marker;
var infowindow;
var currentLat,currentLong;

 function gotLocation(location, lat, long) {
     GoogleMap1.mapOptions.latitude = location.coords.latitude;
     GoogleMap1.mapOptions.longitude = location.coords.longitude;
     GoogleMap1.refresh();

     //Put a marker on our location
     point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
     marker = GoogleMap1.setMarker({
         position: point
     });
     //Add an infoWindow to our marker
     infowindow = GoogleMap1.setInfoWindow("Lat: " + location.coords.latitude + " Lng: " + location.coords.longitude, marker);
     currentLat = location.coords.latitude;
     currentLong = location.coords.longitude;
     console.log("current lat is " + location.coords.latitude);
     NSB.WaitCursor(false);
 }
 
  btnCL.onclick = function() {
  // have to run this before you do anything else - call this getLocation button
     navigator.geolocation.getCurrentPosition(gotLocation);
     NSB.WaitCursor(true);
 };
 */
 