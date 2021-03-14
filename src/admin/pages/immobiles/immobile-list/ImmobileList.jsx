import './ImmobileList.css';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Card from '../../../partials/card/Card';
import CardContent from '../../../partials/card/card-content/CardContent';
import CardHeader from '../../../partials/card/card-header/CardHeader';
import Table from '../../../../common/table/Table';
import monetary from './../../../../common/formatters/monetary';
import { getList, remove } from './../../../reducers/immobile/ImmobileActions';
import image from './image/image';
import Modal from '../../../../common/modal/Modal';
import FixedButton from '../../../../common/buttons/fixed/FixedButton';

const INITIAL_STATE = { selectedImmobile: null, showConfirmRemove: false };

class ImmobileList extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.closeModal = this.closeModal.bind(this);
    this.goEdit = this.goEdit.bind(this);
    this.goNew = this.goNew.bind(this);
  }

  componentWillMount() {
    this.props.getList();
  }

  confirmRemove() {
    this.props.remove(this.state.selectedImmobile._id);
    this.setState({ ...this.state, 
      selectedImmobile: null,
      showConfirmRemove: false 
    });
  }

  closeModal() {
    this.setState({ ...this.state, showConfirmRemove: false });
  }

  remove(immobile) {
    this.setState({ ...this.state, 
      selectedImmobile: immobile,
      showConfirmRemove: true 
    });
  }

  goEdit(id) {
    const { router } = this.props;
    const url = `${router.location.pathname}/edit/${id}`;
    this.props.router.push(url);
  }

  goNew() {
    const { router } = this.props;
    const url = `${router.location.pathname}/new`;
    this.props.router.push(url);
  }

  render() {
    const modalActions = [
      { text: 'CANCELAR', pallet: { fill: '#c8c8c8', text: 'black' }, click: this.closeModal.bind(this) },
      { text: 'REMOVER', pallet: { fill: 'red', text: 'white' }, click: this.confirmRemove.bind(this) }
    ];
    const tableActions = [
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove.bind(this) }
    ];
    const tableColumns = [
      { prop: 'image', label: 'Imagem', flex: 5, template: image },
      { prop: 'type', label: 'Tipo', flex: 5 },
      { prop: 'operation', label: 'Operação', flex: 5 },
      { prop: 'section', label: 'Sessão', flex: 10 },
      { prop: 'name', label: 'Nome', flex: 30 },
      { prop: 'area', label: 'Área', flex: 5, format: m => `${m} m²` },
      { prop: 'price', label: 'Preço', flex: 5, format: monetary },
    ];
    const tablePallet = {
      text: 'black',
      fill: '#007bff57'
    };
    const { immobiles } = this.props;
    return (
      <div className="page-immobile-list">
        <Card>
          <CardHeader>
            <h2>Imóveis</h2>
          </CardHeader>
          <CardContent padding="0">
            <Table rowClick={ immobile => this.goEdit(immobile._id) }
              pallet={ tablePallet } rows={ immobiles }
              columns={ tableColumns } actions={ tableActions } 
            />
          </CardContent>
        </Card>
        <Modal title="Confirmação" 
          actions={ modalActions } show={ this.state.showConfirmRemove } 
          onClose={ this.closeModal }
        >
          Deseja realmente remover o imóvel?
        </Modal>
        <FixedButton title="Cadastrar" onClick={ this.goNew } icon="plus" color="var(--blue)"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ immobiles: state.immobiles });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImmobileList));
