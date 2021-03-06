import './Layout.css';

import React from 'react';

import Header from './partials/header/Header';
import Sidenav from './partials/sidenav/Sidenav';
import Content from './partials/content/Content';

export default props => (
  <div className="container-admin">
    <Header />
    <div className="row-admin">
      <Sidenav />
      <Content>
        { props.children }
      </Content>
    </div>
  </div>
);
