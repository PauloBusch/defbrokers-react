import './FilterSection.css';

import React, { Component } from 'react';
import { reduxForm, Form, Field } from 'redux-form';

import Section from '../../../../../common/section/Section';
import Select from '../../../../../common/fields/select/Select';
import Input from '../../../../../common/fields/input/Input';
import SubmitButton from '../../../../../common/buttons/submit/SubmitButton';
import Row from '../../../../../common/row/Row';

const INITIAL_VALUES = {
  type: 'aluguel',
  startValue: null,
  endValue: null
};

class FilterSection extends Component {
  constructor(props) {
    super(props);

    this.props.initialize(INITIAL_VALUES);
  }

  render() {
    const { handleSubmit } = this.props;
    const types = [
      { text: 'Aluguel', value: 'aluguel' },
      { text: 'Venda', value: 'venda' },
    ];

    return (
      <Section id="search">
        <Form id="form-search" onSubmit={ handleSubmit }>
          <h3>Encontre seu imóvel</h3>
          <Row>
            <Field name="type" placeholder="Tipo" 
              flex="100" component={ Select } options={ types }
            />
          </Row>
          <Row>
            <Field name="startValue" placeholder="Valor Inicial" type="number"
              flex="48" component={ Input } 
            />
            <Field name="endValue" placeholder="Valor Final" type="number"
              flex="48" component={ Input } 
            />
          </Row>
          <SubmitButton fill padding="15px" text="PESQUISAR"/>
        </Form>
      </Section>
    );
  }
}

export default reduxForm({ form: 'search-form', destroyOnUnmount: false })(FilterSection);
