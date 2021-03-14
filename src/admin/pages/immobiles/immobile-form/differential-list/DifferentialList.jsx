import './DifferentialList.css';

import React from 'react';
import { arrayInsert, arrayRemove } from 'redux-form';

import Table from '../../../../../common/table/Table';
import DifferentialField from './differential-field/DifferentialField';
import ImmobileFormListBase from './../ImmobileFormListBase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DifferentialList extends ImmobileFormListBase {
  constructor(props) {
    super(props);
    this.name = 'differentials';
  }

  render() {
    const tableColumns = [
      { prop: 'differential', label: 'Diferencial', flex: 75, template: DifferentialField }
    ];

    const { rows } = this.props;
    if (!rows.some(r => r === '')) rows.push('');
    return (
      <div className="differential-list immobile-form-list">
        <label>Diferenciais:</label>
        <Table rows={ rows.map(d => ({ differential: d })) } 
          pallet={ this.tablePallet } flexAction={ 20 }
          actions={ this.tableActions } columns={ tableColumns }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(DifferentialList);
