import React, {PropTypes} from 'react';
import NewEvent from '../components/NewEvent';

import ActionCable from 'actioncable';

export default class App extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };
  constructor(props) {
    super(props);
    // this.state = defaultState;
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      name: this.props.name,
      events: []
    };

    this.createEvent = this.createEvent.bind(this);
  }

  createEvent(eventData) {
    // ajax call to save event to db
    $.ajax({
      url: '/events',
      type: 'POST',
      data: {event: eventData},
      success: (response) => {

        // alert("Event Successfully created");
        console.log(response);
      },
      error: (response)=>{
        alert("Error creating an event");
      }
    });
  }

  render() {
    return (
      <div>
        <NewEvent createEvent={this.createEvent} />

      </div>
    );

  }
}