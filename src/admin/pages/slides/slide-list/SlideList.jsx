import './SlideList.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Card from '../../../partials/card/Card';
import CardContent from '../../../partials/card/card-content/CardContent';
import CardHeader from '../../../partials/card/card-header/CardHeader';
import { getSlides, remove } from './../../../../reducers/slider/SliderActions';
import image from '../../immobiles/immobile-list/image/Image';
import Table from './../../../../common/table/Table';
import Modal from '../../../../common/modal/Modal';
import FixedButton from '../../../../common/buttons/fixed/FixedButton';

const INITIAL_STATE = { selectedSlide: null, showConfirmRemove: false };

class SlideList extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.closeModal = this.closeModal.bind(this);
    this.goEdit = this.goEdit.bind(this);
    this.goNew = this.goNew.bind(this);
  }

  componentWillMount() {
    this.props.getSlides();
  }

  confirmRemove() {
    this.props.remove(this.state.selectedSlide._id);
    this.setState({ ...this.state, 
      selectedSlide: null,
      showConfirmRemove: false 
    });
  }

  closeModal() {
    this.setState({ ...this.state, showConfirmRemove: false });
  }

  remove(slide) {
    this.setState({ ...this.state, 
      selectedSlide: slide,
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

  getPositionX(raw) {
    if (raw === 'left') return 'Esquerda';
    if (raw === 'center') return 'Centro';
    if (raw === 'right') return 'Direita';
    return '[Nenhum]';
  }

  getPositionY(raw) {
    if (raw === 'top') return 'Topo';
    if (raw === 'center') return 'Centro';
    if (raw === 'bottom') return 'Embaixo';
    return '[Nenhum]';
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
      { prop: 'positionX', label: 'Posicionamento Horizontal', flex: 40, format: this.getPositionX },
      { prop: 'positionY', label: 'Posicionamento Vertical', flex: 40, format: this.getPositionY }
    ];
    const tablePallet = {
      text: 'black',
      fill: '#007bff57'
    };
    const { slides } = this.props;
    return (
      <div className="page-slide-list">
        <Card>
          <CardHeader>
            <h2>Slides</h2>
          </CardHeader>
          <CardContent padding="0">
            <Table rowClick={ slide => this.goEdit(slide._id) }
              pallet={ tablePallet } rows={ slides }
              columns={ tableColumns } actions={ tableActions } 
            />
          </CardContent>
        </Card>
        <Modal title="Confirmação" 
          actions={ modalActions } show={ this.state.showConfirmRemove } 
          onClose={ this.closeModal }
        >
          Deseja realmente remover o slide?
        </Modal>
        <FixedButton title="Cadastrar" onClick={ this.goNew } icon="plus" color="var(--blue)"/>
      </div>
    );    
  }
}

const mapStateToProps = state => ({ slides: state.slider.slides });
const mapDispatchToProps = dispatch => bindActionCreators({ getSlides, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlideList));
