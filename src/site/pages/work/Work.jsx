import './Work.css';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SubmitButton from '../../../common/buttons/submit/SubmitButton';
import Input from '../../../common/fields/input/Input';
import TextArea from '../../../common/fields/textarea/TextArea';

import Section from '../../../common/section/Section';
import File from '../../../common/fields/file/File';
import required from '../../../common/validators/required';
import email from '../../../common/validators/email';
import { sendCurriculum, submitForm } from '../../reducers/curriculum/CurriculumActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Work extends Component {
  render() {
    const { handleSubmit, sendCurriculum, loading } = this.props;
    return (
      <main>
        <Section id="work">
          <form id="form-work"
            className={ `${loading ? 'loading' : ''}` }
            onSubmit={ handleSubmit(sendCurriculum) } 
          >
            <div>
              <h2>Venha trabalhar com a gente!</h2>
              <Field name="email" type="email" placeholder="Email"
                 component={ Input } validate={ [required, email] }
              />
              <Field name="name" type="text" placeholder="Nome"
                component={ Input } validate={ required } 
              />
              <Field name="curriculum" type="file" accept=".pdf" fileFormat="blob"
                button="Selecionar o currículo" placeholder="Selecione um currículo..."
                component={ File } validate={ required }
              />
              <Field name="message" placeholder="Mensagem" maxLength="500" rows="5"
                component={ TextArea } 
              />
              <SubmitButton fill padding="15px" text="Enviar"/>
            </div>
            <div className="container-loading">
              <span className="message-loading">Enviando Currículo...</span>
            </div>
          </form>
        </Section>
      </main>
    );
  }
}

const workForm = reduxForm({ form: 'form-work' })(Work);
const mapStateToProps = state => ({ ...state.curriculum });
const mapDispatchToProps = dispatch => bindActionCreators({ submitForm, sendCurriculum }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(workForm);
