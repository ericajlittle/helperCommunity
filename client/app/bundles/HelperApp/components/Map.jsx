import React, {PropTypes} from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // this.state = defaultState;
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
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