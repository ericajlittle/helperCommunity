import React, {PropTypes} from 'react';

export default class AllEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="all-events">
        <h3>Title: {this.props.title}</h3>
        <p>Host Name: {this.props.user.name}</p>
        <p>Content: {this.props.description}</p>
        <p>Origin: {this.props.address}</p>
        <p>Destination: {this.props.end_address}</p>
        <br />
      </section>
    );
  }
}