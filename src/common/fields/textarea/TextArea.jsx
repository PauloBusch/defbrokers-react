import '../FormControl.css';

import React from 'react';

export default props => (
  <textarea { ...props.input } 
    className="form-control" 
    placeholder={ props.placeholder }>
  </textarea>
);
