import React from 'react';
import { Router, Redirect, Route, IndexRoute, hashHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import AdminLayout from './admin/Layout';
import SiteLayout from './site/Layout';
import Contact from './admin/pages/contact/Contact';
import Home from './site/pages/home/Home';
import Work from './site/pages/work/Work';
import Immobile from './site/pages/immobile/Immobile';
import Reducers from './reducers/reducers';
import SlideList from './admin/pages/slides/slide-list/SlideList';
import ImmobileList from './admin/pages/immobiles/immobile-list/ImmobileList';
import ImmobileForm from './admin/pages/immobiles/immobile-form/ImmobileForm';
import SlideForm from './admin/pages/slides/slide-form/SlideForm';
import AuthOrApp from './admin/AuthOrApp';
import ForgotPassword from './admin/auth/forgot-password/ForgotPassword';
import ChangePassword from './admin/auth/change-password/ChangePassword';

const store = applyMiddleware(thunk, promise)(createStore)(Reducers);
export default props => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ SiteLayout }>
        <IndexRoute component={ Home }/>
        <Route path="work" component={ Work }/>
        <Route path="immobile/:id" component={ Immobile }/>
      </Route>
      <Route exact path="/admin/change-password" component={ ChangePassword } />
      <Route exact path="/admin/forgot-password" component={ ForgotPassword } />
      <Route exact path="/admin/forgot-password/:email" component={ ForgotPassword } />
      <Route exact path="/admin" component={ AuthOrApp }>
        <IndexRoute component={ Contact }/>
        <Route path="slides" component={ SlideList }/>
        <Route path="slides/new" component={ SlideForm }/>
        <Route path="slides/edit/:id" component={ SlideForm }/>
        <Route path="immobiles" component={ ImmobileList }/>
        <Route path="immobiles/new" component={ ImmobileForm }/>
        <Route path="immobiles/edit/:id" component={ ImmobileForm }/>
      </Route>
    </Router>
  </Provider>
);
