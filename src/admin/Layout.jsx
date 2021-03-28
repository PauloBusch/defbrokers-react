import './Layout.css';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './partials/header/Header';
import Sidenav from './partials/sidenav/Sidenav';
import Content from './partials/content/Content';
import Toastr from '../common/messages/toastr';
import Modal from '../common/modal/Modal';
import ChangePassword from './auth/change-password/ChangePassword';
import { submitChangePassword, changePassword } from './reducers/auth/AuthActions';
import { getContact } from './../reducers/contact/ContactActions';

const INITIAL_STATE = { showChangePassword: false };

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.changePassword = this.changePassword.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.getContact();
  }

  closeModal() {
    this.setState({ ...this.state, showChangePassword: false });
  }

  changePassword() {
    this.setState({ ...this.state, showChangePassword: true });
  }

  render() {
    const { submitChangePassword, changePassword } = this.props;

    const modalActions = [
      { text: 'CANCELAR', pallet: { fill: '#c8c8c8', text: 'black' }, click: this.closeModal },
      { text: 'ALTERAR', pallet: { fill: 'blue', text: 'white' }, click: submitChangePassword }
    ];

    return (
      <div className="container-admin">
        <Header changePassword={ this.changePassword }/>
        <div className="row-admin">
          <Sidenav />
          <Content>
            { this.props.children }
          </Content>
          <Toastr />
        </div>
        <Modal title="Alteração de Senha" 
          actions={ modalActions } show={ this.state.showChangePassword } 
          onClose={ this.closeModal }
        >
         <ChangePassword onSubmit={ changePassword }/> 
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitChangePassword, changePassword, getContact }, dispatch);
export default connect(null, mapDispatchToProps)(Layout);
