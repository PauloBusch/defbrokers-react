import './Sidenav.css';

import React from 'react';
import Menu from './menu/Menu';
import MenuItem from './menu-item/MenuItem';

export default props => (
  <div className="sidenav">
    <Menu>
      <MenuItem href="#" active name="Imóveis" icon="fa-house-user"/>
      <MenuItem href="#" name="Imóveis"/>
    </Menu>
  </div>
);
