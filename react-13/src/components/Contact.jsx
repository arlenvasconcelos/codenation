import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact">
        <span className="contact__avatar">
          <img src={this.props.contact.avatar} alt={this.props.contact.avatar}/>
        </span>
        <span className="contact__data">{this.props.contact.name}</span>
        <span className="contact__data">{this.props.contact.phone}</span>
        <span className="contact__data">{this.props.contact.country}</span>
        <span className="contact__data">{this.props.contact.admissionDate}</span>
        <span className="contact__data">{this.props.contact.company}</span>
        <span className="contact__data">{this.props.contact.department}</span>
      </article>
    );
  }
}

export default Contact;
