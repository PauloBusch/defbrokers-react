import './Contact.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SubmitButton from '../../../common/buttons/submit/SubmitButton';
import Card from '../../partials/card/Card';
import CardContent from '../../partials/card/card-content/CardContent';
import CardHeader from '../../partials/card/card-header/CardHeader';
import CardFooter from '../../partials/card/card-footer/CardFooter';
import ContactForm from './contact-form/ContactForm';
import { update, submitForm } from '../../../reducers/contact/ContactActions';

class Contact extends Component {  
  render() {
    return (
      <div className="page-contact">
        <Card>
          <CardHeader>
            <h2>Contato</h2>
          </CardHeader>
          <CardContent>
            <ContactForm onSubmit={ this.props.update } />
          </CardContent>
          <CardFooter>
            <SubmitButton text="SALVAR" onClick={ this.props.submitForm }/>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitForm, update }, dispatch);
export default connect(null, mapDispatchToProps)(Contact);
