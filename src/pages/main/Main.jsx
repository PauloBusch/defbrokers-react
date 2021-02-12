import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Slider from '../common/slider/Slider';

class Main extends Component {
  render() {
    const { slides, timeTransition } = this.props;
  
    return (
      <div>
        <Header />
        <Slider slides={ slides } timeTransition={ timeTransition } />
        <div style={ { 'height': '900px' } }>
  
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.slider });
export default connect(mapStateToProps)(Main);
