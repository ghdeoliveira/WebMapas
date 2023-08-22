// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -27.028, lng: -48.659 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

}

initMap();





// AIzaSyAw0pg3jG7SRxHhMrDkxt6cj758KoPKsfw