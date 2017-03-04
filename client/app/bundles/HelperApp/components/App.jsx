import React, {PropTypes} from 'react';
import NewEvent from '../components/NewEvent';

import ActionCable from 'actioncable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.createEvent = this.createEvent.bind(this);
  }

  createEvent(eventData) {
    $.ajax({
      url: '/events',
      type: 'POST',
      data: {event: eventData},
      success: (response) => {
        // alert("Event Successfully created");
        console.log(response);
      },
      error: (response)=>{
        // alert("Error creating an event");
        console.log(response);
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