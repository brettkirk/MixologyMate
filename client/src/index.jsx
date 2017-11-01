import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './store.js';

import App from './App.jsx';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <BrowserRouter basename="/">
      <App store={store} />
    </BrowserRouter>
), document.getElementById('root'));

// registerServiceWorker();