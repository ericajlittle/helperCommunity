$(function() {
  function initMap(data) {
    var uluru = {lat: 49.2821004, lng: -123.1082745};

    var map = new google.maps.Map(document.getElementById('map'), {
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
      center: uluru
    });

    var contentString;

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    });

    if (data) {
      for(i = 0; i < data.length; i++) {
        var marker = new google.maps.Marker({
          position: {lat: data[i]["lat"], lng: data[i]["lng"]},
          map: map
        });

        contentString = '<div class="event-title">' +
                        '<a href = "/events/' + data[i]['id'] + '">' + data[i]['title'] + '</a>' +
                        '<p>' + data[i]['description'] + '</p>'
                        '</div>';

        makeInfoWindowEvent(map, infowindow, contentString, marker);
      }
    }
  }

  function makeInfoWindowEvent(map, infowindow, contentString, marker) {
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    });
  }

  $(window).resize(function() {
    var height = $(window).height() - $('nav').height() - $('.index-map .container').height();
    $("#map").css('height', height);
    google.maps.event.trigger(map,'resize')
    console.log(height);
  });

  var height = $(window).height() - $('nav').height() - $('.index-map .container').height();
  $("#map").css('height', height);
  console.log(height);

  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    initMap(data);
  });
});

