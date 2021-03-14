import './ImmobileFormListBase.css';

import React, { Component } from 'react';

export default class ImmobileFormListBase extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);

    this.tableActions = [
      { icon: 'trash-alt', title: 'Remover', color: 'red', click: this.remove }
    ];
    this.tablePallet = {
      text: 'white',
      fill: 'var(--blue)'
    };
  }

  add(row, index) {
    this.props.arrayInsert('immobile-form', this.name, index + 1, '');
  }
  
  remove(row, index) {
    if (row === '' || this.props.rows.length === 1) return false;
    this.props.arrayRemove('immobile-form', this.name, index);
  }
}
