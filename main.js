const latitude = 0;
const longitude = 0;

LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    this.latNow = position.coords.latitude;
    this.longNow = position.coords.longitude;

    latitude = this.latNow;
    longitude = this.longNow;
   
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11=" 
    + this.latNow + "," + this.longNow 
    + "&spn=0.054166,0.110378&z=13&output=embed";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
      });
}
else {
    alert("Geolocalização não reconhecida.");
}

// Cordenadas Casa: -27.028797379424535, -48.659996588194424