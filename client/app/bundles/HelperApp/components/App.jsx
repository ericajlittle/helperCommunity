import React, {PropTypes} from 'react';
import NewEvent from '../components/NewEvent';
import AllEvents from '../components/AllEvents';

import ActionCable from 'actioncable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      events: [],
      showAllEvents: false
    };

    this.createEvent = this.createEvent.bind(this);
    // this.toggleAllEvents = this.toggleAllEvents.bind(this);

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

  registerRoom (roomInfo) {
    $.ajax({
      url: '/rooms',
      type: 'POST',
      data: {room: roomInfo},
      error: () => {
        alert("Room is failed to create!");
      }
    });
  }

  createEvent(eventData) {
    console.log('App.Createevent EXECUTED!');
    $.ajax({
      url: '/events',
      type: 'POST',
      data: {event: eventData},
      success: (response) => {
        console.log('the response is ', response);
        const roomInfo = {
          title: response.title,
          event_id: response.id
        };
        console.log('here is the roomInfo', roomInfo);
        this.registerRoom(roomInfo);
      },
      error: (response)=>{
        console.log(response);
      }
    });
  }
  toggleAllEvents = () => {
    this.setState({showAllEvents: !this.state.showAllEvents});
  }
  render() {
    var runEffectStyle = this.state.showAllEvents ?
      {display: "inherit", right: "0%"} :
      {display: "inherit", right: "-100%"};

    const allEvents = this.state.events.map(({ title, description, address, end_address, user }, i) => {
        return (<AllEvents title={ title } description={ description } address={ address } end_address={ end_address } user={user} key={i} />);
    })
    return (
      <div>
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
  }
}