import './Footer.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import FixedButton from '../fixed-button/FixedButton';
import { generateSendMessageLink, generateAddContactLink } from '../whatsapp/Whatsapp';
import Logo from '../logo/Logo';

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
              <i className="fab fa-whatsapp"></i> 
              { whatsapp }
            </a>
            <a href="mailto:contato@defbrokers.com.br">
              <i className="far fa-envelope"></i> 
              { email }
            </a>
          </li>        
          <li className="about">
            <h3>INSTITUCIONAL</h3>
            <a href="#quem-somos">{ name }</a>
            <a href="#quem-somos">Nossos valores</a>
            <a href="join-work.html">Trabalhe Conosco</a>
            <a href="#">Anuncie seu Imóvel</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="copyright">
            <i className="far fa-copyright"></i> 
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
