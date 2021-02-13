import './Menu.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateAddContactLink } from '../../../common/whatsapp/Whatsapp';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    const { name, whatsapp, open, onClick } = this.props;

    return (
      <ul className={ `menu ${ open ? 'show' : '' }` } onClick={ onClick }>
        <li><Link href="/">Imóveis</Link></li>
        <li><Link to="/#about">{ name }</Link></li>
        <li className="phone">
          <a href={ generateAddContactLink(whatsapp) } target="_blank">
            <i className="fab fa-whatsapp"></i>&nbsp;
            { whatsapp }
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Menu);
