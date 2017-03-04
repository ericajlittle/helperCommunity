$(function() {
  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    initMap(data);
  });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function initMap(data) {
  window.App || (window.App = {});

  var mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  var vancouver = {lat: 49.2821004, lng: -123.1082745};
  var map = new google.maps.Map(mapContainer, {
    zoom: 12,
    center: vancouver
  });

  window.App.map = map;

  if (data) {
    for(i = 0; i < data.length; i++) {

      addEventToMap(map, data[i]);

    }
  }
}

function requestDirections(map, start, end) {
  var directionsService = new google.maps.DirectionsService;
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  }, function(result) {
    renderDirections(map, result);
  });
}

function renderDirections(map, result) {
  var directionsRenderer = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: getRandomColor()
    },
    suppressMarkers:true
  });
  directionsRenderer.setMap(map);
  directionsRenderer.setDirections(result);
}

function addEventToMap(map, event) {
  var markerA = addMarker(map, event, event.lat, event.lng, true);
  var markerB = addMarker(map, event, event.end_lat, event.end_lng, false);

  requestDirections(map,
    {lat: event["lat"], lng: event["lng"]},
    {lat: event["end_lat"], lng: event["end_lng"]});
}

function addMarker(map, event, lat, lng, isOrigin) {
  var marker = new google.maps.Marker({
    position: {lat, lng},
    title: isOrigin ? "Origin" : "Destination",
    label: isOrigin ? "A" : "B",
    map: map
  });
  var contentString = '<div class="event-title">' +
                  '<a href="/events/' + event['id'] + '">' + event['title'] + '</a>' +
                  (isOrigin ? `<br><br><p>${event.address}</p>` : `<p>${event.end_address}</p>`) +
                  '<p>' + event['description'] + '</p>' +
                  '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
  return marker;
}
