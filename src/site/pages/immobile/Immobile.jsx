import './Immobile.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from '../../../common/section/Section';
import Banner from './banner/Banner';
import Header from './header/Header';
import Info from './info/Info';
import Galery from './galery/Galery';
import Aside from './aside/Aside';
import If from '../../../common/operators/If';

class Immobile extends Component {
  find(id) {
    for (const section of this.props.sections){
      const immobile = section.immobiles.find(c => c.id === id);
      if (immobile) return immobile;
    }
    return null;
  }

  render() {
    const immobile = this.find(this.props.params.id);
    if (!immobile) return (<h2 className="not-found">Imóvel não encontrado</h2>);
    return (
      <main>
        <Section id="immobile-detail">
          <Banner immobile={ immobile }/>
          <Header />
          <div className="row">
            <div>
              <Info immobile={ immobile }/>
              <If test={ immobile.photos && immobile.photos.length > 0 }>
                <Galery images={ immobile.photos }/>
              </If>
            </div>
            <Aside price={ immobile.price } realtor={ immobile.realtor }/>
          </div>
        </Section>
      </main>
    );
  }
}

const mapStateToProps = state => ({ sections: state.sections });
export default connect(mapStateToProps)(Immobile);
