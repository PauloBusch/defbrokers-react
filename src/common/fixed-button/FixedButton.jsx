import './FixedButton.css';

import React from 'react';

export default props => {
  const { image, href } = props;

  return (
    <div className="fixed-button-site">
      <a href={ href } target="_blank">
        <img src={ image }/>
      </a>
    </div>
  );
};
