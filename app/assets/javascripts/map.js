$(function() {
  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    if (window.google) {
      initMap(data);
    }
  });

  // Map for single event page
  if($(".event-page").length) {
    var eventId = $(".event-page").data("id");

    $.ajax({
      url: "/events/" + eventId,
      dataType: "json"
    }).done(function(data) {
      if (window.google) {
        initSingleMap(data);
      }
    });
  }
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
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
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

function formatCoordinate(coordinate) {
  return parseFloat(coordinate.toFixed(6));
}

function addEventToMap(map, event) {
  var markerA = addMarker(map, event, event.lat, event.lng, true);
  // if there is no marker b aka end point, just make one marker!
  if (event.end_lat != null) {
    var markerB = addMarker(map, event, event.end_lat, event.end_lng, false);

    requestDirections(map,
      {lat: event["lat"], lng: event["lng"]},
      {lat: event["end_lat"], lng: event["end_lng"]});
  }
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

function initSingleMap(event) {
  window.App || (window.App = {});

  var mapContainer = document.getElementById("single-map");
  if (!mapContainer) return;

  var vancouver = {lat: 49.2821004, lng: -123.1082745};
  var map = new google.maps.Map(mapContainer, {
    zoom: 12,
    center: vancouver
  });

  window.App.map = map;

  if (event) {
    addEventToMap(map, event);
  }
}
