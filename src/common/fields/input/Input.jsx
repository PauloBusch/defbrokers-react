import '../FormControl.css';

import React from 'react';

export default props => (
  <input { ...props.input } 
    className="form-control" 
    type={ props.type } 
    placeholder={ props.placeholder }>
  </input>
);
