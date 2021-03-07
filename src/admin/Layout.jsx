import './Layout.css';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './partials/header/Header';
import Sidenav from './partials/sidenav/Sidenav';
import Content from './partials/content/Content';
import Toastr from '../common/messages/toastr';
import { getContact } from './../reducers/contact/ContactActions';

class Layout extends Component {
  componentWillMount() {
    this.props.getContact();
  }

  render() {
    return (
      <div className="container-admin">
        <Header />
        <div className="row-admin">
          <Sidenav />
          <Content>
            { this.props.children }
          </Content>
          <Toastr />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getContact }, dispatch);
export default connect(null, mapDispatchToProps)(Layout);
