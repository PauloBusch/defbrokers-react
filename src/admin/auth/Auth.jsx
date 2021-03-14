import './Auth.css';

import React, { Component } from 'react';
import { reduxForm, Form, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Toastr from '../../common/messages/toastr';
import { login } from './../reducers/auth/AuthActions';
import Input from './../../common/fields/input/Input';
import SubmitButton from '../../common/buttons/submit/SubmitButton';

class Auth extends Component { 
  isValid() {
    const { email, password } = this.props;
    return email && password;
  }

  render() {
    const { handleSubmit, login } = this.props;

    return (
      <div className="background-login">
        <Form id="form-login" onSubmit={ handleSubmit(login) }>
          <h2>Login</h2>
            <Field component={ Input } type="email" name="email"
              placeholder="E-mail" icon="user"/>
            <Field component={ Input } type="password" name="password"
              placeholder="Senha" icon="envelope"/>
            <SubmitButton disabled={ !this.isValid() } fill padding="10px" text="Entrar"/>
        </Form>
        <Toastr />
      </div>
    );
  }
}

const authForm = reduxForm({ form: 'login-form' })(Auth);
const selector = formValueSelector('login-form');
const mapStateToProps = state => ({ 
  email: selector(state, 'email'), 
  password: selector(state, 'password') 
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(authForm);
