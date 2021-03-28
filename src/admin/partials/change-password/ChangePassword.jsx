import './ChangePassword.css';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Field, Form, formValueSelector, reduxForm } from 'redux-form';

import Input from '../../../common/fields/input/Input';
import required from '../../../common/validators/required';
import password from '../../../common/validators/password';

class ChangePassword extends Component {
  equalPassword(value) {
    if (!value) return undefined;
    const { newPassword } = this.props;
    if (newPassword !== value) return 'As senhas devem coincidir';
    return undefined;
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <Form id="form-change-password-modal" onSubmit={ handleSubmit(onSubmit) }>
        <Field component={ Input } type="password" name="oldPassword"
          placeholder="Senha atual" validate={ required }/>
        <Field component={ Input } type="password" name="newPassword"
          placeholder="Nova senha" validate={ required, password }/>
        <Field component={ Input } type="password" name="confirmPassword"
          placeholder="Confirmação da senha" validate={ required, this.equalPassword.bind(this) }/>
      </Form>
    );
  }
}

const changePassword = reduxForm({ form: 'change-password-form' })(ChangePassword);
const selector = formValueSelector('change-password-form');
const mapStateToProps = state => ({ 
  newPassword: selector(state, 'newPassword'), 
  confirmPassword: selector(state, 'confirmPassword')
});
export default connect(mapStateToProps)(changePassword);
