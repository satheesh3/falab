import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
