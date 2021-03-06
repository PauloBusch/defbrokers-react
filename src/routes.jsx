import React from 'react';
import { Router, Redirect, Route, IndexRoute, hashHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

import AdminLayout from './admin/Layout';
import SiteLayout from './site/Layout';
import Contact from './admin/pages/contact/Contact';
import Home from './site/pages/home/Home';
import Work from './site/pages/work/Work';
import Immobile from './site/pages/immobile/Immobile';
import Reducers from './reducers/reducers';

const store = applyMiddleware(promise)(createStore)(Reducers);
export default props => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ SiteLayout }>
        <IndexRoute component={ Home }/>
        <Route path="work" component={ Work }/>
        <Route path="immobile/:id" component={ Immobile }/>
      </Route>
      <Route path="/admin" component={ AdminLayout }>
        <IndexRoute component={ Contact }/>
        <Redirect from="*" to="/admin"/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>
);
