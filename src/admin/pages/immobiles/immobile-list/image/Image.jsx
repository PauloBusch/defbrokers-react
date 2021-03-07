import './Image.css';
import React from 'react';

export default props => {
  const { image } = props.row;
  if (!image) return false;
  return (
    <img className="immobile-image" src={ image } alt="Foto"/>
  );
}
