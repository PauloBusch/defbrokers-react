import './FilterSection.css';

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Section from '../../../../../common/section/Section';
import Select from '../../../../../common/fields/select/Select';
import Input from '../../../../../common/fields/input/Input';
import SubmitButton from '../../../../../common/buttons/submit/SubmitButton';

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
        <form id="form-search" onSubmit={ handleSubmit }>
          <h3>Encontre seu imóvel</h3>
          <div className="row">
            <Field name="type" component={ Select } placeholder="Tipo" options={ types }/>
          </div>
          <div className="row">
            <Field name="startValue" component={ Input } placeholder="Valor Inicial" type="number" className="form-control"/>
            <Field name="endValue" component={ Input } placeholder="Valor Final" type="number" className="form-control"/>
          </div>
          <SubmitButton text="PESQUISAR"/>
        </form>
      </Section>
    );
  }
}

export default reduxForm({ form: 'search-form', destroyOnUnmount: false })(FilterSection);
