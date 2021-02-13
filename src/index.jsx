import 'modules/@fortawesome/fontawesome-free/css/all.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './pages/Routes';
import Reducers from './reducers/Reducers';

const store = createStore(Reducers);
ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
