import './ImmobileSection.css';

import React from 'react';

import Section from '../../../../common/section/Section';
import ImmobileCard from '../../cards/immobile-cards/ImmobileCard';

export default props => {
  const { title, immobiles } = props;

  return (
    <Section className="immobiles">
      <h2>{ title }</h2>
      <ul>
        { immobiles.map(i => <ImmobileCard key={ i.id } immobile={ i }/>) }
      </ul>
    </Section>
  );
}
