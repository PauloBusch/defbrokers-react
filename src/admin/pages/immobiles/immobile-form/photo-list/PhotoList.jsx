import './PhotoList.css';

import React from 'react';
import Table from '../../../../../common/table/Table';
import ImmobileFormListBase from './../ImmobileFormListBase';
import image from '../../immobile-list/image/image';
import PhotoField from './photo-field/PhotoField';

export default class PhotoList extends ImmobileFormListBase {
  add(differential) {

  }
  
  remove(differential) {

  }

  render() {
    const tableActions = [
      { icon: 'plus', title: 'Adicionar', color: 'green', click: this.add.bind(this) },
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove.bind(this) },
    ];
    const tableColumns = [
      { prop: 'image', label: 'Imagem', flex: 10, template: image },
      { prop: 'file', label: 'Arquivo', flex: 70, template: PhotoField }
    ];
    const tablePallet = {
      text: 'white',
      fill: 'var(--blue)'
    };

    const { rows } = this.props;
    return (
      <div className="photo-list immobile-form-list">
      <label>Fotos:</label>
        <Table rows={ rows.map(p => ({ image: p, file: p })) } 
          pallet={ tablePallet } flexAction={ 20 }
          actions={ tableActions } columns={ tableColumns }
        />
      </div>
    );
  }
}
