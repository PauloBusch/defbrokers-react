import './MenuItem.css';

import React from 'react';
import { Link } from 'react-router';        

export default props => {
  const currentHref = location.hash.substr(2);
  return (
    <li className="menu-item">
      <Link to={ props.href } className={ `${ currentHref === props.href ? 'active' : '' }` }>
        <i className={ `fas ${props.icon}` }></i>
        { props.name }
      </Link>
    </li>
  );
}
