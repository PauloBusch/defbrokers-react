import './AboutSection.css';

import React from 'react';

import Section from '../../../../common/section/Section';

export default () => (
  <Section id="about">
    <div>
      <img src="images/defbrokers/def.jpg"/>
    </div>      
    <div className="text">
      <h3>Quem Somos</h3>
      <p>A DEF BROKERS IMOBILIÁRIA é uma empresa que vive diariamente a missão de contribuir 
        com a realização do sonho da vida das pessoas, a casa própria.</p>
      <p>NOSSOS VALORES SÃO:</p>
      <ul>
        <li>
          <p>PROPÓSITO:</p>
          Contribuir com a vida das pessoas que compram imóveis, seja em investimento ou moradia.
        </li>
        <li>
          <p>MISSÃO:</p>
          Transformar a vida das pessoas, proporcionando a melhor experiência para todos os envolvidos
        </li>
        <li>
          <p>VISÃO:</p>
          Ser referência de atuação, por meio de uma gestão eficiente e excelência em atendimento 
          com foco em uma solução personalizada para cada cliente.
        </li>
      </ul>
      <p>TEMOS PAIXÃO PELO QUE FAZEMOS.</p>
    </div>
  </Section>
);
