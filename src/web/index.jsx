import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

render((
    <App api="http://localhost:8392/api"/>
), document.getElementById('container'));
