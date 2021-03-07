import React from 'react';
import FieldBase from './../FieldBase';

export default class Select extends FieldBase {
  getOptions() {
    const { options } = this.props;
    if (!options || !Array.isArray(options)) return [];
    const [ first ] = options;
    if (!first) return [];
    const type = typeof first;
    if (type === 'object') return options
      .map(o => ({ value: o.value, text: o.text }));
    if (type === 'string') return options
      .map(o => ({ value: o, text: o }));
    return [];
  }

  field() {
    return (
      <select { ...this.props.input } 
        className="form-control" 
        placeholder={ this.props.placeholder }>
        { this.getOptions().map(o => <option key={ o.value } value={ o.value }>{ o.text }</option>) }
      </select>
    );
  }
}


