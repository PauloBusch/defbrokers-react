import './Sidenav.css';

import React from 'react';
import Menu from './menu/Menu';
import MenuItem from './menu-item/MenuItem';

export default props => (
  <div className="sidenav">
    <Menu>
      <MenuItem href="#" active name="Contato" icon="fa-address-card"/>
      <MenuItem href="#" name="Slides" icon="fa-images"/>
      <MenuItem href="#" name="Imóveis" icon="fa-house-user"/>
    </Menu>
  </div>
);
