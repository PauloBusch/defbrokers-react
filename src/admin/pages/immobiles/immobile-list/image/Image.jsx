import './Image.css';
import React from 'react';

export default props => {
  const { image } = props.row;
  return (
    <img className="immobile-image" src={ image || '/images/defbrokers/image-icon.webp' } alt="Foto"/>
  );
}
