import './Home.css';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { search, getList } from '../../reducers/section/SectionActions';
import { getSlides } from '../../reducers/slider/SliderActions';
import Slider from '../../../common/slider/Slider';
import FilterSection from './sections/filter-section/FilterSection';
import AboutSection from './sections/about-section/AboutSection';
import ImmobileSection from './sections/immobile-section/ImmobileSection';

class Main extends Component {
  componentWillMount() {
    this.props.getSlides();
    this.props.getList();
  }

  render() {
    const { slides, sections, timeTransition, search } = this.props;

    return (
      <div id="home">
        <Slider slides={ slides } timeTransition={ timeTransition } />
        <main>
          <FilterSection onSubmit={ search }/>
          { sections.map((s, i) => <ImmobileSection key={ i } title={ s.title } immobiles={ s.immobiles }/>) }
          <AboutSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.slider, sections: state.sections });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, getSlides, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
