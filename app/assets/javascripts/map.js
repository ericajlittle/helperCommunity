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

$(function() {

  var height = $(window).height() - $('nav').height() - $('.index-map .container').height();
  $("#map").css('height', height);

  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    initMap(data);
  });
});

