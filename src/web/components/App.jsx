import React from 'react';

import ContactForm from './ContactForm.jsx';
import AdminPanel from './AdminPanel.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const {
      api,
    } = this.props;

    // Get all existing messages.
    fetch(api + '/messages')
      .then(res => res.json())
      .then(messages => this.setState({messages}))
      .catch(err => console.log(err));
  }

  handleSubmit(name, email, message) {
    const {
      api,
    } = this.props;

    const {
      messages,
    } = this.state;

    // Send the message to the Node server.
    fetch(api + '/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(res => res.json())
      .then(message => {
        messages.push(message);
        this.setState({messages});
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      messages,
    } = this.state;

    return (
        <div className="container">
          <h1>Contact form demo</h1>
          <ContactForm onSubmit={this.handleSubmit}/>
          <hr/>
          <AdminPanel title="All messages"
                      messages={messages}/>
        </div>
    );
  }
}
