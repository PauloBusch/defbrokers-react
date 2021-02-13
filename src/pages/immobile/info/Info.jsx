import './Info.css';

import React from 'react';
import If from '../../../common/operators/If';

export default props => {
  const { immobile } = props;
  const { caracteristics } = immobile;
  const differentials = immobile.differentials || [];

  return (
    <div className="immobile-info">        
      <div className="immobile-data">
        <div>
          <i className="fas fa-home"></i> 
          <span>
            <span title="Banheiros">{ caracteristics.bathrooms }</span> e 
            <span title="Quartos">{ caracteristics.badrooms }</span> Qtos
          </span>
        </div>
        <div>
          <i className="fas fa-chart-area"></i> 
          <span title="Área">{ caracteristics.area }</span>
        </div>
      </div>
      <If test={ immobile.description }>
        <div>
          <h3>Descrição</h3>
          <p>{ immobile.description }</p>
        </div>
      </If>
      <If test={ differentials.length > 0 }>
        <div>
          <h3>Diferenciais</h3>
          <ul className="differentials">
            { differentials.map((d, i) => <li key={ i }>{ d }</li>) }
          </ul>
        </div>
      </If>
    </div>
  );
}
