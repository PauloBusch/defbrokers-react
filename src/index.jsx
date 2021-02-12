import 'modules/font-awesome/css/font-awesome.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './pages/main/Main';
import Reducers from './reducers/Reducers';

const store = createStore(Reducers);
ReactDOM.render(
  <Provider store={ store }>
    <Main />
  </Provider>,
  document.getElementById('app')
);
