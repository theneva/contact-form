import React from 'react';

import TextInput from './TextInput.jsx';
import EmailInput from './EmailInput.jsx';
import TextArea from './TextArea.jsx';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render() {
    const {
      onSubmit,
    } = this.props;

    const {
      name,
      email,
      message,
    } = this.state;

    return (
        <div className="form">
          <form onSubmit={e => {
            onSubmit(name, email, message)
            e.preventDefault();
          }}>
            <TextInput label="Your name"
                       onChange={name => this.setState({name})}
                       placeholder="Name"/>
            <EmailInput label="Your email"
                        onChange={email => this.setState({email})}
                        placeholder="someone@example.com"/>
            <TextArea label="Your message"
                      onChange={message => this.setState({message})}
                      placeholder="Your message here"/>
            <button className="btn btn-primary">Send!</button>
          </form>
        </div>
    );
  }
}
