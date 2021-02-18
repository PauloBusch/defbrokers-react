import React from 'react';
import { Router, Route, Redirect, hashHistory  } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

import Reducers from './reducers/reducers';

const store = applyMiddleware(promise)(createStore)(Reducers);
export default props => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" />
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>
);
