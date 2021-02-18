import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory  } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Immobile from './pages/immobile/Immobile';
import Reducers from './reducers/reducers';

const store = applyMiddleware(promise)(createStore)(Reducers);
export default props => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ Home }/>
        <Route path="work" component={ Work }/>
        <Route path="immobile/:id" component={ Immobile }/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>
);
