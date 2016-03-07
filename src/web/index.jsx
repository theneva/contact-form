import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';

// accepts state (the existing state of the app)
// and an action (what to do with the state)
function reducer(
  state = {
    messages: [],
    contactInfo: {}
  }, action) {

  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [...state.messages, action.data],
        contactInfo: state.contactInfo,
      };
    case 'UPDATE_CONTACT_INFO':
      return {
        messages: state.messages,
        contactInfo: action.data,
      };
    default: return state;
  }
}

const store = createStore(reducer);

render((
  <Provider store={store}>
    <App api="http://localhost:8392/api"/>
  </Provider>
), document.getElementById('container'));
