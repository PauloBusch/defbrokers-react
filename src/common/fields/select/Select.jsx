import React from 'react';
import FieldBase from './../FieldBase';

export default class Select extends FieldBase {
  field() {
    return (
      <select { ...this.props.input } 
        className="form-control" 
        placeholder={ this.props.placeholder }>
        { this.props.options.map(o => <option key={ o.value } value={ o.value }>{ o.text }</option>) }
      </select>
    );
  }
}


