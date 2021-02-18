import './ImmobileCard.css';

import React from 'react';
import { Link } from 'react-router';

export default props => {
  const { immobile } = props;
  const { caracteristics } = immobile;

  return (
    <li className="immobile">
      <Link to={ `immobile/${immobile.id}` }>
        <div className="img" style={ { backgroundImage: `url('${ immobile.image }')` } }></div>
        <div className="detail">
          <h3>{ immobile.immobileType }</h3>
          <h2>{ immobile.name }</h2>
          <h4>{ immobile.city } - { immobile.uf }</h4>
          <br/>
          <h3>{ immobile.type }</h3>
          <div className="price">
            <h4>R$</h4> <h2><strong>{ parseFloat(immobile.price).toLocaleString() }</strong></h2>
          </div>
        </div>
        <div className="caracteristics">
          <span><i className="fas fa-check"></i> <h5><strong>{ caracteristics.badrooms }</strong> quartos</h5></span>
          <span><i className="fas fa-check"></i> <h5><strong>{ caracteristics.bathrooms }</strong> banheiros</h5></span>
          <span><i className="fas fa-check"></i> <h5><strong>{ caracteristics.parkingSpaces }</strong> vagas na garagem</h5></span>
          <span><i className="fas fa-check"></i> <h5><strong>{ caracteristics.area }</strong> área construída</h5></span>
        </div>
      </Link>
    </li>
  );
}
