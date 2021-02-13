import './Header.css';

import React, { Component } from 'react';

import Logo from '../../common/logo/Logo';
import Menu from './menu/Menu';

const INITIAL_STATE = { open: false };

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  render() {
    return (
      <header>
        <nav>
          <div className="main">
            <Logo />
            <i id="mobile" className="fas fa-bars toggle-menu" onClick={ this.toggleMenu }></i>
          </div>
          <Menu open={ this.state.open } onClick={ this.toggleMenu }/>
        </nav>
      </header>);
  }
}
