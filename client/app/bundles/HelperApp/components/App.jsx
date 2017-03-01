import React, {PropTypes} from 'react';
import Map from '../components/Map';
import NewEvent from '../components/NewEvent';

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

        // alert("Event Successfully created");
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