import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Footer from './partials/footer/Footer';
import Header from './partials/header/Header';
import { getContact } from './../reducers/contact/ContactActions';
import Toastr from '../common/messages/toastr';

class Layout extends Component {
  componentWillMount() {
    this.props.getContact();
  }
  
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
        <Toastr />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getContact }, dispatch);
export default connect(null, mapDispatchToProps)(Layout);
