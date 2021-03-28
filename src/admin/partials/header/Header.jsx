import './Header.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="header-admin">
        <div className="title">
          <i className="fas fa-user-cog"></i>
          <h1>Painel Administrativo - { this.props.name || 'Website' }</h1>
        </div>
        <div className="actions">
          <button type="button" id="change-password" onClick={ this.props.changePassword }>Alterar senha</button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Header);
