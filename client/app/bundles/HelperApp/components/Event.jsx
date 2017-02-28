import React, { PropTypes } from 'react';

export default class Event extends React.Component {


  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);



  }

  updateName = (name) => {
    this.setState({ name });
  };

  onWelcome = () =>{
    alert("hello");
  };

  handleClick = ()=>{
    var title = this.refs.title.value;
    var desc = this.refs.description.value;
    console.log("title is:",title);
    console.log("desc is:",desc);
    $.ajax({
      url: '/events',
      type: 'POST',
      data: {event: {title: title, description: desc }},
      success: (response) => {

        alert("Event Successfully created");
        console.log(response);
      },
      error: (response)=>{
        alert("Error creating an event");
      }
    }); //end of the Ajax call
  };

  render() {
    return (
      <div>

        <h3>Welcome to Event Management System</h3>

        <input ref='title' placeholder='Enter the title of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>

      </div>
    );
  }
}
