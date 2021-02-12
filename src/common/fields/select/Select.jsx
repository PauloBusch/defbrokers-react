import './Select.css';

import React from 'react';

export default props => (
  <select { ...props.input } 
    className="form-control" 
    placeholder={ props.placeholder }>
    { props.options.map(o => <option key={ o.value } value={ o.value }>{ o.text }</option>) }
  </select>
);
