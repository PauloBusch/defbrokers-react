import './Contact.css';
import React from 'react';

import SubmitButton from '../../../common/buttons/submit/SubmitButton';
import Card from '../../partials/card/Card';
import CardContent from '../../partials/card/card-content/CardContent';
import CardHeader from '../../partials/card/card-header/CardHeader';
import CardFooter from '../../partials/card/card-footer/CardFooter';
import ContactForm from './contact-form/ContactForm';

export default props => (
  <div className="page-contact">
    <Card>
      <CardHeader>
        <h2>Contato</h2>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
      <CardFooter>
        <SubmitButton text="SALVAR"/>
      </CardFooter>
    </Card>
  </div>
);
