import './File.css';

import React from 'react';
import FieldBase from '../FieldBase';

const INITIAL_STATE = {
  file: null,
  name: ''
};

export default class File extends FieldBase {
  constructor(props) {
    super(props);

    this.fileInput = null;
    this.state = INITIAL_STATE;
  }

  field() {
    const { input, button, placeholder } = this.props;

    return (
      <div className="form-control file-input" >
        <button type="button" onClick={ () => this.fileInput.click() }>{ button || 'Selecionar arquivo' }</button>
        <label>{ placeholder || 'Selecione um arquivo...' }</label>
        <input { ...input } 
          style={ { display: 'none' } }
          type="file" 
          ref={ el => this.fileInput = el }>
        </input>
      </div>
    );
  }
}
