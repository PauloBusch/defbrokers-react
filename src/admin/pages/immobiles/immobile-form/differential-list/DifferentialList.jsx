import './DifferentialList.css';

import React from 'react';
import Table from '../../../../../common/table/Table';
import DifferentialField from './differential-field/DifferentialField';
import ImmobileFormListBase from './../ImmobileFormListBase';

export default class DifferentialList extends ImmobileFormListBase {
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
      { prop: 'differential', label: 'Diferencial', flex: 75, template: DifferentialField }
    ];
    const tablePallet = {
      text: 'white',
      fill: 'var(--blue)'
    };

    const { rows } = this.props;
    return (
      <div className="differential-list immobile-form-list">
        <label>Diferenciais:</label>
        <Table rows={ rows.map(d => ({ differential: d })) } 
          pallet={ tablePallet } flexAction={ 20 }
          actions={ tableActions } columns={ tableColumns }
        />
      </div>
    );
  }
}
