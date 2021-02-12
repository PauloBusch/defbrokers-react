import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Slider from '../common/slider/Slider';
import FilterSection from './sections/filter-section/FilterSection';
import AboutSection from './sections/about-section/AboutSection';
import ImmobileSection from './sections/immobile-section/ImmobileSection';

class Main extends Component {

  search(filter) {
    console.log(filter);
  }

  render() {
    const { slides, sections, timeTransition } = this.props;

    return (
      <div>
        <Header />
        <Slider slides={ slides } timeTransition={ timeTransition } />
        <main>
          <FilterSection onSubmit={ this.search }/>
          { sections.map((s, i) => <ImmobileSection key={ i } title={ s.title } cards={ s.cards }/>) }
          <AboutSection />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.slider, sections: state.sections });
export default connect(mapStateToProps)(Main);
