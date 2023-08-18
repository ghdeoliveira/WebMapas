LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    this.latNow = position.coords.latitude;
    this.longNow = position.coords.longitude;
  
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11=" 
    + this.latNow + "," + this.longNow + "&spn=0.054166,0.110378&z=13&output=embed";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);
}
else {
    alert("Geolocalização não reconhecida.");
}

// Cordenadas Casa: -27.0283301, -48.6595561/

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}