import './ImmobileSection.css';

import React from 'react';

import Section from '../../../common/section/Section';
import ImmobileCard from '../../cards/immobile-cards/ImmobileCard';

export default props => {
  const { title, cards } = props;

  return (
    <Section className="immobiles">
      <h2>{ title }</h2>
      <ul>
        { cards.map(c => <ImmobileCard key={ c.id } data={ c }/>) }
      </ul>
    </Section>
  );
}
