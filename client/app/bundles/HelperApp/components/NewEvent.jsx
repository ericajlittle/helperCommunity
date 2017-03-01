import React, {PropTypes} from 'react';

export default class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const title = this.refs.title.value;
    const desc = this.refs.description.value;
    const address = this.refs.address.value;
    const city = this.refs.city.value;

    const eventData = {
      title: title,
      description: desc,
      address: address,
      city: city
    }
    this.props.createEvent(eventData)
  }

  render() {
    return (

      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">Create a New Event</h1>
            <button className="delete"></button>
          </header>
          <section className="modal-card-body">
            <input ref='title' placeholder='Enter the Event Title' />
            <input ref='description' placeholder='Enter a Description' />
            <input ref='scheduled_at' placeholder='Enter Event Date' type="datetime-local" name="bday" />
            <input ref='address' placeholder='Enter the Address' />
            <input ref='city' placeholder='Enter the City' />
          </section>
          <footer className="modal-card-foot">
            <button  onClick={this.handleClick}>Create Event</button>
            <a className="button">Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}