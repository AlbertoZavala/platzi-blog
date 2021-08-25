import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './css/index.css';

const store = createStore(
  reducers, // Agregr todos los Reducers
  {}, // Es el estado inicial 
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
