import React from 'react';
import { Field } from 'redux-form';

import File from './../../../../../../common/fields/file/File';

export default props => {
  const { index } = props;
  
  return (
    <Field name={ `photos[${index}]` } className="image-field" button="Selecionar" placeholder="Selecione uma imagem"
      component={ File }
    />
  );
}
