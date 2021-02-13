import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { search } from './ImmobileActions';
import Slider from '../../common/slider/Slider';
import FilterSection from './sections/filter-section/FilterSection';
import AboutSection from './sections/about-section/AboutSection';
import ImmobileSection from './sections/immobile-section/ImmobileSection';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { slides, sections, timeTransition, search } = this.props;

    return (
      <div>
        <Slider slides={ slides } timeTransition={ timeTransition } />
        <main>
          <FilterSection onSubmit={ search }/>
          { sections.map((s, i) => <ImmobileSection key={ i } title={ s.title } cards={ s.cards }/>) }
          <AboutSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.slider, sections: state.sections });
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
