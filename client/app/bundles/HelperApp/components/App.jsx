import React, {PropTypes} from 'react';
import Map from '../components/Map';
import NewEvent from '../components/NewEvent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
    this.createEvent = this.createEvent.bind(this);
  }

  createEvent(eventData) {
    $.ajax({
      url: '/events',
      type: 'POST',
      data: {event: eventData},
      success: (response) => {

        alert("Event Successfully created");
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
        <Map />
      </div>
    );
  }
}