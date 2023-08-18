LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    this.latNow = position.coords.latitude;
    this.longNow = position.coords.longitude;
    
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11=" + this.latNow + "," + this.longNow + "&spn=0.054166,0.110378&z=13&output=embed";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);
}
else {
    alert("Tente um browser HTML5 diferente. Este não está funcionando com geolocalização.");
}