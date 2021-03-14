import './PhotoList.css';

import React from 'react';
import { arrayInsert, arrayRemove } from 'redux-form';

import Table from '../../../../../common/table/Table';
import ImmobileFormListBase from './../ImmobileFormListBase';
import image from '../../immobile-list/image/image';
import PhotoField from './photo-field/PhotoField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PhotoList extends ImmobileFormListBase {
  constructor(props) {
    super(props);
    this.name = 'photos';
  }

  render() {
    const tableColumns = [
      { prop: 'image', label: 'Imagem', flex: 20, template: image },
      { prop: 'file', label: 'Arquivo', flex: 70, template: PhotoField }
    ];
    
    const { rows } = this.props;
    if (!rows.some(r => r === '')) rows.push('');

    return (
      <div className="photo-list immobile-form-list">
      <label>Fotos:</label>
        <Table rows={ rows.map(p => ({ image: p, file: p })) } 
          pallet={ this.tablePallet } flexAction={ 10 }
          actions={ this.tableActions } columns={ tableColumns }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(PhotoList);
