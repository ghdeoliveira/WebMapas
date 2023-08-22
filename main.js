var KEY = config.API_KEY;

LocationMaster = new Object();
LocationMaster.lookUpPosition = function(position) 
{
    this.latNow = position.coords.latitude;
    this.longNow = position.coords.longitude;
    
    /*
    document.getElementById("mapHolder").src = "http://maps.google.com/maps?h1=en&ie=UTF8&11="
    +this.latNow+","+this.longNow+"&spn=0.054166,0.110378&z=13&output=embed&zoom=11"; 
    */

    //document.getElementById("mapHolder").src = "https://www.google.com/maps/embed/v1/view?key="+KEY+"&center=-27.0283301,-48.6595561&zoom=13";
    document.getElementById("mapHolder").src = "https://www.google.com/maps/embed/v1/view?key="+KEY+"&center="+this.latNow+","+this.longNow+"&zoom=15";

}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(LocationMaster.lookUpPosition);
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    alert("Geolocalização não encontrada!");
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
