import './Work.css';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SubmitButton from '../../../common/buttons/submit/SubmitButton';
import Input from '../../../common/fields/input/Input';
import TextArea from '../../../common/fields/textarea/TextArea';

import Section from '../../../common/section/Section';
import File from '../../../common/fields/file/File';
import Row from '../../../common/row/Row';
import required from '../../../common/validators/required';
import email from '../../../common/validators/email';

class Work extends Component {
  render() {
    return (
      <main>
        <Section id="work">
          <form id="form-work">
            <div>
              <h2>Venha trabalhar com a gente!</h2>
              <Field name="email" type="email" placeholder="Email"
                 component={ Input } validate={ [required, email] }
              />
              <Field name="name" type="text" placeholder="Nome"
                component={ Input } validate={ required } 
              />
              <Field name="curriculum" type="file" accept=".pdf" 
                button="Selecionar o currículo" placeholder="Selecione um currículo..."
                component={ File } validate={ required }
              />
              <Field name="message" placeholder="Mensagem" maxLength="500" rows="5"
                component={ TextArea } 
              />
              <SubmitButton fill padding="15px" text="Enviar"/>
            </div>
          </form>
        </Section>
      </main>
    );
  }
}

export default reduxForm({ form: 'form-work' })(Work);
