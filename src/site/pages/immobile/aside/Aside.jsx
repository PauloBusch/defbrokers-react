import './Aside.css';

import React from 'react';
import { generateSendMessageLink } from '../../../../common/whatsapp/Whatsapp';

export default props => {
  const { price, realtor } = props;

  return (
    <div className="immobile-asside">
    <h3>Preço de Venda</h3>
    <div className="row">
      <h4>R$</h4>&nbsp;
      <h2><strong>{ parseFloat(price).toLocaleString() }</strong></h2>
    </div>
    <a href={ generateSendMessageLink(realtor) } target="_blank">
      <i className="fab fa-whatsapp"></i>&nbsp;
      Falar com um Corretor
    </a>
  </div>
  );
}
