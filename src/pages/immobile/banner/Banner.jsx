import './Banner.css';

import React from 'react';

export default props => {
  const { immobile } = props;
  return (
    <div className="banner">
      <div className="img" style={ { backgroundImage: `url('${ immobile.image }')` } }></div>
      <div className="caption">
        <h5>{ immobile.immobileType }</h5>
        <h2>{ immobile.name }</h2>
        <hr />
        <h4>{ immobile.city } - { immobile.uf }</h4>
      </div>
    </div>
  );
};
