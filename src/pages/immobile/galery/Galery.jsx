import './Galery.css';

import React, { Component } from 'react';
import Modal from '../../../common/modal/Modal';
import If from '../../../common/operators/If';
import Slider from '../../../common/slider/Slider';

const INITIAL_STATE = { photo: null };

export default class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(photo) {
    this.setPhoto(photo);
  }

  closeModal(){
    this.setPhoto(null);
  }

  setPhoto(photo) {
    this.setState({ ...this.state, photo });
  }

  render() {
    const { images } = this.props;

    return (
      <div className="galery">
        <h3>Galeria</h3>
        <ul>
          { images.map((p, i) => <li key={ i }><img src={ p } onClick={ () => this.openModal(p) }/></li>) }
        </ul>

        <If test={ !!this.state.photo }>
          <Modal title="Galeria" show="true" handleClose={ this.closeModal }>
            <Slider slides={ images.map(i => ({ image: i })) } current={ this.state.photo } timeTransition={ 5000 } />
          </Modal>
        </If>
      </div>);
  }
}
