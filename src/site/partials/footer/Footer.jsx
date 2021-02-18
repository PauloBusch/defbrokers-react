import './Footer.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import FixedButton from '../../../common/fixed-button/FixedButton';
import { generateSendMessageLink, generateAddContactLink } from '../../../common/whatsapp/Whatsapp';
import Logo from '../../../common/logo/Logo';

class Footer extends Component {
  render() {
    const { name, email, whatsapp } = this.props;
    const year = new Date().getFullYear();
    return (
      <footer>
        <ul>
          <li>
            <Logo />
            <p>Seja qual for o seu propósito, nós queremos te ajudar a cumpri-lo.</p>
          </li>
          <li className="contact">
            <h3>FALE CONOSCO</h3>
            <a href={ generateAddContactLink(whatsapp) } target="_blank">
              <i className="fab fa-whatsapp"></i>&nbsp;
              { whatsapp }
            </a>
            <a href="mailto:contato@defbrokers.com.br">
              <i className="far fa-envelope"></i>&nbsp;
              { email }
            </a>
          </li>        
          <li className="about">
            <h3>INSTITUCIONAL</h3>
            <a href="#about">{ name }</a>
            <a href="#about">Nossos valores</a>
            <Link to="work">Trabalhe Conosco</Link>
            <a href="#">Anuncie seu Imóvel</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="copyright">
            <i className="far fa-copyright"></i>&nbsp;
            DEF Brokers { year } - Todos os direitos reservados
          </span>
          <a href="https://gritealto.com/" target="_blank">
            Powered by GriteAlto
          </a>         
        </div>
        <FixedButton image="images/social/whatsapp.png" href={ generateSendMessageLink(whatsapp) }/>
      </footer>
    );
  }
}

const mapStateToProps = state => ({ ...state.contact });
export default connect(mapStateToProps)(Footer);
