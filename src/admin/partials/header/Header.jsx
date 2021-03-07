import './Header.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header className="header-admin">
        <i className="fas fa-user-cog"></i>
        <h1>Painel Administrativo - { this.props.name || 'Website' }</h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Header);
