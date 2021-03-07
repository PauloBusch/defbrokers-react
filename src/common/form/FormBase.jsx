import './FormBase.css';

import React, { Component } from 'react';
import Card from '../../admin/partials/card/Card';
import CardHeader from '../../admin/partials/card/card-header/CardHeader';
import CardContent from '../../admin/partials/card/card-content/CardContent';
import CardFooter from '../../admin/partials/card/card-footer/CardFooter';
import SubmitButton from '../buttons/submit/SubmitButton';

export default class FormBase extends Component { 
  getTitle() {
    if (this.id) {
      if (this.data)
        return `Edição do ${this.title}`;
      else 
        return 'Carregando...';
    }
    
    return `Cadastro de ${this.title}`;
  }

  save() {

  }

  goBack() {

  }

  render() {
    return (
      <div className="page-base-form">
        <Card>
          <CardHeader>
            <h2>{ this.getTitle() }</h2>
            <i title="Voltar" className="go-back fas fa-times" onClick={ this.goBack }></i>
          </CardHeader>
          <CardContent>
            { this.form() }
          </CardContent>
          <CardFooter>
            <SubmitButton text="SALVAR" onClick={ this.save }/>
          </CardFooter>
        </Card>
      </div>
    );
  }

  form() { }
}
