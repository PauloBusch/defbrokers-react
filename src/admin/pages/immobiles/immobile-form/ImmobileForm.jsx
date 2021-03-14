import './ImmobileForm.css';

import React from 'react';
import { withRouter } from 'react-router';
import { Field, Form, formValueSelector, reduxForm } from 'redux-form';

import FormBase from '../../../../common/form/FormBase';
import Row from '../../../../common/row/Row';
import Input from './../../../../common/fields/input/Input';
import required from './../../../../common/validators/required';
import Select from './../../../../common/fields/select/Select';
import phone from './../../../../common/validators/phone';
import TextArea from './../../../../common/fields/textarea/TextArea';
import File from '../../../../common/fields/file/File';
import DifferentialList from './differential-list/DifferentialList';
import PhotoList from './photo-list/PhotoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadForm, submitForm, create, update } from './../../../reducers/immobile/ImmobileActions';
import { getList } from './../../../reducers/section/SectionActions';
import { getTypes } from './../../../reducers/type/TypeActions';

const DEFAULT_STATE = { 
  address: { uf: 'PR' },
  differentials: [],
  photos: []
};

class ImmobileForm extends FormBase {
  constructor(props) {
    super(props);
    if (!this.id) {
      this.props.initialize(DEFAULT_STATE);
    }
    this.title = 'Imóvel';
    this.props.getList();
    this.props.getTypes();
    this.submit = this.submit.bind(this);
  }

  prepareValues(raw) {
    const { differentials, photos } = raw;
    raw.differentials = differentials.filter(d => d);
    raw.photos = photos.filter(d => d);
    return raw;
  }

  submit(raw) {
    const values = this.prepareValues(raw);
    if (this.id)
      this.props.update(values);
    else
      this.props.create(values);

    this.goBack();
  }

  form() {
    const differentials = this.props.differentials || [];
    const photos = this.props.photos || [];

    const { handleSubmit, types, states, sections, operations } = this.props;

    return (
      <Form id="immobile-form" onSubmit={ handleSubmit(this.submit) }>
        <Row>
          <Field name="name" type="text" label="Nome" placeholder="Informe o nome"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="type" label="Tipo" placeholder="Informe o tipo"
            flex="25" component={ Select } options={ types } insert validate={ required }
          />
          <Field name="section" label="Sessão" placeholder="Informe a sessão"
            flex="25" component={ Select } options={ sections } insert validate={ required }
          />
          <Field name="realtorPhone" type="text" label="Telefone do corretor" placeholder="Informe o telefone do corretor"
            flex="25" component={ Input } validate={ [required, phone] }
          />
        </Row>
        <Row>
          <Field name="operation" label="Operação" placeholder="Informe a operação"
            flex="25" component={ Select } options={ operations } validate={ required }
          />
          <Field name="address.uf"label="UF" placeholder="Informe o estado"
            flex="25" component={ Select } options={ states } validate={ required }
          />
          <Field name="address.city" type="text" label="Cidade" placeholder="Informe a cidade"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="price" type="number" label="Preço" placeholder="Informe o preço"
            flex="25" component={ Input } validate={ required }
          />
        </Row>
        <Row>
          <Field name="area" type="number" label="Área" placeholder="Informe a área"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="badrooms" type="number" label="Quantidade de Quartos" placeholder="Informe a quantidade de quartos"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="bathrooms" type="number" label="Quantidade de Banheiros" placeholder="Informe a quantidade de banheiros"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="parkingSpaces" type="number" label="Quantidade de Vagas no Estacionamento" placeholder="Informe a quantidade de vagas"
            flex="25" component={ Input } validate={ required }
          />
        </Row>
        <Row>
          <Field name="image" className="image-field" label="Imagem" button="Selecionar" placeholder="Selecione uma imagem"
            flex="25" component={ File } validate={ required }
          />
        </Row>
        <Row>
          <Field name="description" label="Descrição" placeholder="Informe a descrição"
            flex="100" component={ TextArea } validate={ required }
          />
        </Row>
        <Row>
          <DifferentialList rows={ differentials }/>
          <PhotoList rows={ photos }/>
        </Row>
      </Form>
    );
  }
}

const immobileForm = reduxForm({ form: 'immobile-form' })(withRouter(ImmobileForm));
const selector = formValueSelector('immobile-form');
const mapStateToProps = state => ({ 
  states: state.state,
  types: state.types,
  sections: state.section,
  operations: state.operations,
  differentials: selector(state, 'differentials'), 
  photos: selector(state, 'photos') 
});
const mapDispatchToProps = dispatch => bindActionCreators({ getList, getTypes, loadForm, submitForm, create, update }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(immobileForm);
