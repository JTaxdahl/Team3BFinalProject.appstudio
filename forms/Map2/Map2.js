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
case "Add Your Phone Number":
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
     point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
     marker1 = GoogleMap1.setMarker({
         position: point1
     });
     
     //McDicks
     point2 = new google.maps.LatLng(41.268220, -95.947420);
       marker2 = GoogleMap1.setMarker({
         position: point2
     });
     
       //Hyvee
     point3 = new google.maps.LatLng(41.242390, -95.994209);
       marker3 = GoogleMap1.setMarker({
         position: point3
     });
     
       //Subway
     point4 = new google.maps.LatLng(41.268290, -95.946760);
       marker4 = GoogleMap1.setMarker({
         position: point4
     });
     
      //Popeyes
     point5 = new google.maps.LatLng(41.260110, -95.982160);
       marker5 = GoogleMap1.setMarker({
         position: point5
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
 