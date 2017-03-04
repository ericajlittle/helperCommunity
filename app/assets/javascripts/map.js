$(function() {
  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    initMap(data);
  });
});



function initMap(data) {
  var uluru = {lat: 49.2821004, lng: -123.1082745};
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 12,
    center: uluru
  });

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
      strokeColor: "red"
    },
    suppressMarkers:true
  });
  directionsRenderer.setMap(map);
  directionsRenderer.setDirections(result);
}

function addEventToMap(map, event) {
  // make Markers A and B
  // make info windows for both markers with the content they need
  // set up click event listeners to open info windows
  // request/render directions
  //
  var markerA = addMarker(map, event, event.lat, event.lng, true);
  var markerB = addMarker(map, event, event.end_lat, event.end_lng, false);

  requestDirections(map,
    {lat: event["lat"], lng: event["lng"]},
    {lat: event["end_lat"], lng: event["end_lng"]});

  // makeInfoWindowEvent(map, infowindow, contentString, markerA, markerB);
}

function addMarker(map, event, lat, lng, isOrigin) {
  var marker = new google.maps.Marker({
    position: {lat, lng},
    title: isOrigin ? "Origin" : "Destination",
    label: isOrigin ? "A" : "B",
    map: map
  });
  var contentString = '<div class="event-title">' +
                  '<a href = "/events/' + event['id'] + '">' + event['title'] + '</a>' +
                  (isOrigin ? "..." : "") +
                  '<p>' + event['description'] + '</p>'
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
