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
    const { label, name, className } = this.props;
    const errors = this.errors();

    return (
      <div 
        className={ `form-field ${errors ? 'has-error' : ''} ${className}` }
        style={ { width: this.getWidth() } }
      >
        { label ? <label htmlFor={ name }>{ label }</label> : false }
        { this.fieldWithIcon() }
        { errors }
      </div>
    );
  }

  fieldWithIcon() {
    const { icon } = this.props;
    const field = this.field();
    if (!icon) return field;
    return (
      <div className="field-icon">
        <i className={ `icon fas fa-${icon}` }></i>
        { field }
      </div>
    );
  }
  
  field() { }
}
