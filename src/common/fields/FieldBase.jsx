import './FieldBase.css';

import React, { Component } from 'react';

export default class FieldBase extends Component {
  getWidth() {
    const { flex, px } = this.props;
    if (px) return `${px}px`; 
    if (flex) return `${flex}%`; 
  }

  errors() {
    const { meta: { touched, error } } = this.props;
    if (!touched || !error) return false;
    return <div className="error-message">{ error }</div>;
  }

  render() {
    const errors = this.errors();

    return (
      <div 
        className={ `form-field ${errors ? 'has-error' : ''}` }
        style={ { width: this.getWidth() } }
      >
        { this.field() }
        { errors }
      </div>
    );
  }

  field() { }
}
