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
  componentDidMount() {
    this.setupSubscription();
  }

  // updateCommentList(comment) {
  //   let message = JSON.parse(comment);
  //   this.setState({message: message});
  // },
  setupSubscription(){
    console.log('subscription');

    App.events = App.cable.subscriptions.create("EventsChannel", {
      // message_id: this.state.message.id,

      connected: function () {
        console.log('Connected!');
        // setTimeout(() => this.perform('follow',
                                      // { message_id: this.message_id}), 1000 );
      },

      received: function (data) {
        console.log('Received!');
        // this.updateCommentList(data.comment);
      },

      // updateCommentList: this.updateCommentList

    });
  }
}