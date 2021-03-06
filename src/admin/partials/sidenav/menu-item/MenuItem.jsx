import './MenuItem.css';

import React from 'react';

export default props => (
  <li className="menu-item">
    <a href={ props.href } className={ props.active ? 'active' : '' }>
      <i className={ `fas ${props.icon}` }></i>
      { props.name }
    </a>
  </li>
);
