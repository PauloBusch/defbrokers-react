import './Work.css';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SubmitButton from '../../common/buttons/submit/SubmitButton';
import Input from '../../common/fields/input/Input';
import TextArea from '../../common/fields/textarea/TextArea';

import Section from '../../common/section/Section';
import File from '../../common/fields/file/File';

class Work extends Component {
  render() {
    return (
      <main>
        <Section id="work">
          <form id="form-work">
              <h2>Venha trabalhar com a gente!</h2>
              <Field component={ Input } name="email" type="email" placeholder="Email" required/>
              <Field component={ Input } name="name" type="text" placeholder="Nome" required/>
              <Field component={ File } name="curriculum" type="file" accept=".pdf" button="Selecionar o currículo" placeholder="Selecione um currículo..." required/>
              <Field component={ TextArea } name="message" placeholder="Mensagem" maxLength="500" rows="5" required/>
              <SubmitButton text="Enviar"/>
            </form>
        </Section>
      </main>
    );
  }
}

export default reduxForm({ form: 'form-work' })(Work);
