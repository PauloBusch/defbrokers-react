import './Menu.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
  extractPhoneNumber(phone) {
    const numbers = phone.replace(/\D/g, '');
    return `55${numbers}`;
  }

  render() {
    const { phone } = this.props;

    return (
      <ul>
        <li><a href="./">Imóveis</a></li>
        <li><a href="#quem-somos">A DEF Brokers</a></li>
        <li className="phone">
          <a href={ `https://wa.me/${this.extractPhoneNumber(phone)}` } target="_blank">
            <i className="fab fa-whatsapp"></i>
            { phone }
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Menu);
