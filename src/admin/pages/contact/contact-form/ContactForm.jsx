import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import { bindActionCreators } from 'redux';

import email from '../../../../common/validators/email';
import phone from '../../../../common/validators/phone';
import required from './../../../../common/validators/required';
import Row from '../../../../common/row/Row';
import Input from '../../../../common/fields/input/Input';
import { getContact } from './../../../../reducers/contact/ContactActions';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    
    this.props.initialize(undefined);
  }

  componentWillMount() {
    this.props.getContact();
  }

  render() {
    const { onSubmit, handleSubmit } = this.props;

    return (
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Row>
          <Field name="name" type="text" label="Nome" placeholder="Informe o nome"
            flex={ 100 / 3 } component={ Input } validate={ [required] }
          />
          <Field name="email" type="email" label="Email" placeholder="Informe o email"
            flex={ 100 / 3 } component={ Input } validate={ [required, email] }
          />
          <Field name="whatsapp" type="text" label="Whatsapp" placeholder="Informe o Whatsapp"
            flex={ 100 / 3 } component={ Input } validate={ [required, phone] }
          />
        </Row>
      </Form>
    );
  }
}

const contactForm = reduxForm({ form: 'contact-form', destroyOnUnmount: false })(ContactForm);
const mapStateToProps = state => ({ initialValues: state.contact });
const mapDispatchToProps = dispatch => bindActionCreators({ getContact }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(contactForm);
