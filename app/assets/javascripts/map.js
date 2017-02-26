function initMap(data) {
  var uluru = {lat: 49.2821004, lng: -123.1082745};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });

  // var marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map
  // });

  for(i = 0; i < data.length; i++) {
    var marker = new google.maps.Marker({
      position: {lat: data[i]["lat"], lng: data[i]["lng"]},
      map: map
    });
  }
}

$(function() {
  $.ajax({
    url: "/events",
    dataType: "json"
  }).done(function(data) {
    // console.log(data);
    initMap(data);
  });
});

