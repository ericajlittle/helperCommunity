import React, {PropTypes} from 'react';
import NewEvent from '../components/NewEvent';
import AllEvents from '../components/AllEvents';

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

    this.cable = ActionCable.createConsumer();
        console.log(this.cable);
        this.setupSubscription();
  }
  componentDidMount() {
    this.getEvents();
  }
  getEvents() {
    $.ajax({
      url: "/events",
      dataType: "json"
    }).done((data) => {
      this.setState({ events: data })
    });
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
    const allEvents = this.state.events.map(({ title, description, address, end_address, user }, i) => {
        return (<AllEvents title={ title } description={ description } address={ address } end_address={ end_address } user={user} key={i} />);
    })
    return (
      <div>
        {allEvents}
        <NewEvent createEvent={this.createEvent} />
      </div>
    );
  }
  setupSubscription(){

    this.event = this.cable.subscriptions.create("EventChannel", "UserChannel", {

      connected: () => {
        console.log("connected??");
      },

      received: (data) => {
        console.log('received', data);
        this.getEvents();
      },

      updateCommentList: this.updateCommentList

    });
    console.log('this.event', this.event);
  }
}