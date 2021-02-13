import './ImmobileCard.css';

import React from 'react';

export default props => {
  const { data } = props;

  return (
    <li className="immobile">
      <div className="img" style={ { backgroundImage: `url('${ data.image }')` } }></div>
      <div className="detail">
        <h3>{ data.immobileType }</h3>
        <h2>{ data.name }</h2>
        <h4>{ data.city } - { data.uf }</h4>
        <br/>
        <h3>{ data.type }</h3>
        <div className="price">
          <h4>R$</h4> <h2><strong>{ parseFloat(data.price).toLocaleString() }</strong></h2>
        </div>
      </div>
      <div className="caracteristics">
        <span><i className="fas fa-check"></i> <h5><strong>{ data.quartos }</strong> quartos</h5></span>
        <span><i className="fas fa-check"></i> <h5><strong>{ data.banheiros }</strong> banheiros</h5></span>
        <span><i className="fas fa-check"></i> <h5><strong>{ data.vagasGaragem }</strong> vagas na garagem</h5></span>
        <span><i className="fas fa-check"></i> <h5><strong>{ data.areaConstruida }</strong> área construída</h5></span>
      </div>
    </li>
  );
}
