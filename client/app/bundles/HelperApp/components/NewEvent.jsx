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
    var title = this.refs.title.value;
    var desc = this.refs.description.value;
    var scheduled_at = this.refs.scheduled_at.value;
    var address = this.refs.address.value;
    var city = this.refs.city.value;
    var end_address = this.refs.end_address.value;
    const eventData = {
      title: title,
      description: desc,
      scheduled_at: scheduled_at,
      address: address,
      city: city,
      end_address: end_address
    }
    this.props.createEvent(eventData)
  }
  render() {
    return (
      <div id="modal-crev" className="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create a New Event</p>
            </header>
            <section className="modal-card-body">
              <div className="form-group">
                <label className="label required">Title:</label>
                <p className="control">
                  <input ref='title' placeholder='LHL Demo Day' className='input' />
                </p>
              </div>
              <div className="form-group">
                <label className="label required">Description:</label>
                <p className="control">
                  <textarea ref='description' className='textarea' placeholder='Help moving tables and chairs' ></textarea>
                </p>
              </div>
              <div className="form-group">
                <label className="label required">Date:</label>
                <p className="control">
                  <input ref='scheduled_at' type="datetime-local" className='input bday' />
                </p>
              </div>
              <div className="form-group">
                <label className="label required">Address:</label>
                <p className="control">
                  <input ref='address' className='input' placeholder='128 W. Hastings' />
                </p>
              </div>
              <div className="form-group">
                <label className="label required">Destination:</label>
                <p className="control">
                  <input ref='end_address' className='input' placeholder='200 W. Hastings' />
                </p>
              </div>
              <div className="form-group">
                <label className="label required">City:</label>
                <p className="control">
                  <input ref='city' className='input' placeholder='Vancouver' />
                </p>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.handleClick} className="button">Create Event</button>
              <a className="button">Cancel</a>
            </footer>
          </div>
      </div>
    );
  }
}