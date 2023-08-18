LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    //this.latNow = position.coords.latitude;
    //this.longNow = position.coords.longitude;

    this.latNow = -27.028797379424535;
    this.longNow = -48.659996588194424;
    
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11=" + this.latNow + "," + this.longNow + "&spn=0.054166,0.110378&z=13&output=embed";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);
}
else {
    alert("Tente um browser HTML5 diferente. Este não está funcionando com geolocalização.");
}

// Cordenadas Casa: -27.028797379424535, -48.659996588194424