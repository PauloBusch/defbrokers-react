import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory  } from 'react-router';
import Layout from './Layout';

import Home from './home/Home';
import Work from './work/Work';

export default props => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Home }/>
      <Route path="work" component={ Work }/>
    </Route>
    <Redirect from="*" to="/"/>
  </Router>
);
