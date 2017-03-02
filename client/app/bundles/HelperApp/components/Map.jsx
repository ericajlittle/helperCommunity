import React, {PropTypes} from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // this.state = defaultState;
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  componentDidMount() {
    console.log('getting events');
    this.getEvents();
  }

  getEvents() {
    const _this = this;
    $.ajax({
      url: "/events",
      dataType: "json"
    }).done(function(data) {
      _this.initMap(data);
    });
  }

  initMap(data) {
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
      for( let i = 0; i < data.length; i++) {
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

  render() {
    console.log('Loading Map component');
    return (
      <section className="index-map">
        <p>Click here</p>
        <div className="columns">
          <div className="column">
            Community Enagement Resource, for members of the community supporting eachother through goodwill.
            Beautiful text about our app
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div id="map"></div>


          </div>
        </div>

      </section>
    );
  }
}