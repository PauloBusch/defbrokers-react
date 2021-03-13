import './ImmobileForm.css';

import React from 'react';
import { withRouter } from 'react-router';
import { Field, Form, reduxForm } from 'redux-form';

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

class ImmobileForm extends FormBase {
  constructor(props) {
    super(props);
    this.title = 'Imóvel';
  }

  form() {
    const differentials = [
      'Casa com picina'
    ];

    const photos = [
      'images/immobiles/imovel1.webp',
      'images/immobiles/imovel2.webp'
    ];

    const types = ['CASA', 'KITNET', 'CONDOMÍNIO', 'SOBRADO'];
    const sections = ['Sessão 1', 'Sessão 2'];
    const operations = ['COMPRA', 'ALUGUEL'];
    const states = ['PR', 'MG'];

    return (
      <Form id="immobile-form" onSubmit={ () => { } }>
        <Row>
          <Field name="name" type="text" label="Nome" placeholder="Informe o nome"
            flex="25" component={ Input } validate={ required }
          />
          <Field name="type" label="Tipo" placeholder="Informe o tipo"
            flex="25" component={ Select } options={ types } validate={ required }
          />
          <Field name="section" label="Sessão" placeholder="Informe a sessão"
            flex="25" component={ Select } options={ sections } validate={ required }
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

export default reduxForm({ form: 'immobile-form' })(withRouter(ImmobileForm));
