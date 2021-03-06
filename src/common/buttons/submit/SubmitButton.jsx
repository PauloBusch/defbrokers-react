import './SubmitButton.css';

import React from 'react';

export default props => (
  <button type="submit" onClick={ props.onClick } style={ 
    { 
      width: props.fill ? '100%' : 'auto',
      padding: props.padding ? props.padding : ''
    } 
  }>{ props.text }</button>
);
