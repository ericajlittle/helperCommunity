import React, {PropTypes} from 'react';
import Map from '../components/Map';
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
    this.state = { name: this.props.name };
    // this.handleClick = this.handleClick.bind(this);
    this.createEvent = this.createEvent.bind(this);

    this.cable = ActionCable.createConsumer();
    console.log(this.cable);

    this.setupSubscription();
  }

  // handleClick() {
  //   alert('Clicked');
  //   var title = this.refs.title.value;
  //   var desc = this.refs.description.value;
  //   console.log("title is:",title);
  //   console.log("desc is:",desc);
  //   $.ajax({
  //     url: '/events',
  //     type: 'POST',
  //     data: {event: {title: title, description: desc }},
  //     success: (response) => {

  //       alert("Event Successfully created");
  //       console.log(response);
  //     },
  //     error: (response)=>{
  //       alert("Error creating an event");
  //     }
  //   }); //end of the Ajax call
  // }

  createEvent(eventData) {
    // ajax call to save event to db
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
  setupSubscription(){

    this.event = this.cable.subscriptions.create("EventChannel", {
      // event_id: this.state.event.id,

      connected: function () {
        console.log("connected??");
        // setTimeout(() => this.perform('follow',
        //                               { message_id: this.message_id}), 1000 );
      },

      received: function (data) {
        console.log('received', data);
        // this.updateCommentList(data.comment);
      },

      updateCommentList: this.updateCommentList

    });
    console.log('this.event', this.event);
  }
}