import './SlideForm.css';

import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import required from './../../../../common/validators/required';
import Select from './../../../../common/fields/select/Select';
import Row from '../../../../common/row/Row';
import File from './../../../../common/fields/file/File';
import FormBase from './../../../../common/form/FormBase';

class SlideForm extends FormBase { 
  constructor(props) {
    super(props);
    this.title = 'Slide';
  }

  form() {
    const positionXOptions = [
      { text: 'Esquerda', value: 'left' },
      { text: 'Centro', value: 'center' },
      { text: 'Direita', value: 'right' }
    ];
    const positionYOptions = [
      { text: 'Topo', value: 'top' },
      { text: 'Centro', value: 'center' },
      { text: 'Embaixo', value: 'bottom' }
    ];
    return (
      <Form id="slide-form" onSubmit={ () => { } }>
        <Row justify="flex-start">
          <Field name="image" className="image-field" label="Imagem" button="Selecionar" placeholder="Selecione uma imagem"
            flex="25" component={ File } validate={ required }
          />
          <Field name="positionX" label="Posição Horizontal" 
            flex="25" component={ Select } options={ positionXOptions } validate={ required }
          />
          <Field name="positionY" label="Posição Vertical" 
            flex="25" component={ Select } options={ positionYOptions } validate={ required }
          />
        </Row>
      </Form>
    );
  }
}

export default reduxForm({ form: 'slide-form' })(SlideForm);
