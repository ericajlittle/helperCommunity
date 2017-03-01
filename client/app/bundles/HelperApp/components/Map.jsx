import React, {PropTypes} from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    console.log('Loading Map component');
    return (
      <section className="index-map">
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