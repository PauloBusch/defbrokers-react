import './Header.css';

import React from 'react';

import Logo from '../../common/logo/Logo';
import Menu from './menu/Menu';

export default props => (
  <header>
    <nav>
      <div className="main">
        <Logo />
        <i id="mobile" className="fas fa-bars toggle-menu"></i>
      </div>
      <Menu />
    </nav>
  </header>
);
