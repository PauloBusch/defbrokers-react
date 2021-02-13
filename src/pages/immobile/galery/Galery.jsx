import './Galery.css';

import React from 'react';

export default props => (
  <div className="galery">
    <h3>Galeria</h3>
    <ul>
      { props.images.map((p, i) => <li key={ i }><img src={ p }/></li>) }
    </ul>
  </div>
);
