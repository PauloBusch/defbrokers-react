import './Menu.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateAddContactLink } from '../../../../common/whatsapp/Whatsapp';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    const { name, whatsapp, open, onClick, facebookLabel, facebookLink, instagramLabel, instagramLink } = this.props;

    return (
      <ul className={ `menu ${ open ? 'show' : '' }` } onClick={ onClick }>
        <li><Link href="/">Imóveis</Link></li>
        <li><Link to="/#about">{ name }</Link></li>
        <li className="icons">
          <a href={ generateAddContactLink(whatsapp) } title={ whatsapp } target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a  href={ instagramLink } title={ instagramLabel } target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a  href={ facebookLink } title={ facebookLabel } target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Menu);
