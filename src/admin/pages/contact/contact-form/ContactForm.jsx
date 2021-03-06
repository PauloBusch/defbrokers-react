import React, { Component } from 'react';
import { connect } from 'react-redux';

import email from '../../../../common/validators/email';
import phone from '../../../../common/validators/phone';
import required from './../../../../common/validators/required';
import Row from '../../../../common/row/Row';
import Input from '../../../../common/fields/input/Input';
import { reduxForm, Field } from 'redux-form';
import { getContact } from './../../../../reducers/contact/ContactActions';
import { bindActionCreators } from 'redux';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    
    this.props.getContact();
    this.props.initialize(props.contact);
  }

  componentWillMount() {
    console.log(this.props.contact);
  }

  render() {
    return (
      <form role="form">
        <Row>
          <Field name="name" type="text" placeholder="Nome"
            flex={ 100 / 3 } component={ Input } validate={ required }
          />
          <Field name="email" type="email" placeholder="Email"
            flex={ 100 / 3 } component={ Input } validate={ [required, email] }
          />
          <Field name="whatsapp" type="text" placeholder="Whatsapp"
            flex={ 100 / 3 } component={ Input } validate={ [required, phone] }
          />
        </Row>
      </form>
    );
  }
}

const contactForm = reduxForm({ form: 'contactForm', destroyOnUnmount: false })(ContactForm);
const mapStateToProps = state => ({ initialValues: state.contact });
const mapDispatchToProps = dispatch => bindActionCreators({ getContact }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(contactForm);
