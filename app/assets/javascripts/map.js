function initMap(data) {
  var uluru = {lat: 49.2821004, lng: -123.1082745};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
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
      }),
      markerB = new google.maps.Marker({
        position: {lat: 49.2821004, lng: -123.1082745},
        title: "point B",
        label: "B",
        map: map
      });

      contentString = '<div class="event-title">' +
                      '<a href = "/events/' + data[i]['id'] + '">' + data[i]['title'] + '</a>' +
                      '<p>' + data[i]['description'] + '</p>'
                      '</div>';

      makeInfoWindowEvent(map, infowindow, contentString, marker, markerB);
    }
  }
}

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
}

// $(function() {
//   $.ajax({
//     url: "/events",
//     dataType: "json"
//   }).done(function(data) {
//     initMap(data);
//   });
// });

// function initMap() {
//     var pointA = {lat: 49.28126719999999, lng: -123.0769687},
//         pointB = {lat: 49.2821004, lng: -123.1082745},
//         myOptions = {
//             zoom: 7,
//             center: pointA
//         },
//         map = new google.maps.Map(document.getElementById('map'), myOptions),
//         // Instantiate a directions service.
//         directionsService = new google.maps.DirectionsService,
//         directionsDisplay = new google.maps.DirectionsRenderer({
//             map: map
//         }),
//         markerA = new google.maps.Marker({
//             position: pointA,
//             title: "point A",
//             label: "A",
//             map: map
//         }),
//         markerB = new google.maps.Marker({
//             position: pointB,
//             title: "point B",
//             label: "B",
//             map: map
//         });

//     // get route from A to B
//     calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

// }



// function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
//     directionsService.route({
//         origin: pointA,
//         destination: pointB,
//         avoidTolls: true,
//         avoidHighways: false,
//         travelMode: google.maps.TravelMode.DRIVING
//     }, function (response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }
// initMap();
// var geocoder = new google.maps.Geocoder();
// var address = '1600 Pennsylvania Avenue NW Washington, DC 20500';

// geocoder.geocode( { 'address': address}, function(results, status) {

//     var latitude = results[0].geometry.location.lat();
//     var longitude = results[0].geometry.location.lng();
//     jQuery('#coordinates').val(latitude+', '+longitude);
// console.log(latitude, longitude);

// });
// geocoder.geocode();
