import './File.css';

import React, { Component } from 'react';

const INITIAL_STATE = {
  file: null,
  name: ''
};

export default class File extends Component {
  constructor(props) {
    super(props);

    this.fileInput = null;
    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <div className="form-control file-input" >
        <button type="button" onClick={ () => this.fileInput.click() }>{ this.props.button || 'Selecionar arquivo' }</button>
        <label>{ this.props.placeholder || 'Selecione um arquivo...' }</label>
        <input { ...this.props.input } 
          style={ { display: 'none' } }
          type="file" 
          ref={ el => this.fileInput = el }>
        </input>
      </div>
    );
  }
}
