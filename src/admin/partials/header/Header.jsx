import './Header.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { changePassword, logout } = this.props;

    return (
      <header className="header-admin">
        <div className="title">
          <i className="fas fa-user-cog"></i>
          <h1>Painel Administrativo - { this.props.name || 'Website' }</h1>
        </div>
        <div className="actions">
          <button type="button" id="change-password" onClick={ changePassword }>Alterar senha</button>
          <i id="icon-logout" title="Sair" className="fas fa-sign-out-alt" onClick={ logout }></i>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Header);
