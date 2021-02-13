import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory  } from 'react-router';
import Layout from './Layout';

import Home from './home/Home';
import Work from './work/Work';
import Immobile from './immobile/Immobile';

export default props => (
  <Router history={ hashHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Home }/>
      <Route path="work" component={ Work }/>
      <Route path="immobile/:id" component={ Immobile }/>
    </Route>
    <Redirect from="*" to="/"/>
  </Router>
);
