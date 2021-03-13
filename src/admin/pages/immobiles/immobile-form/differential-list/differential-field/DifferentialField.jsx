import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../../../../common/fields/input/Input';
import required from '../../../../../../common/validators/required';

export default props => {
  const { index } = props;
  
  return (
    <Field name={ `differentials[${index}]` } type="text" placeholder="Informe o diferencial"
      component={ Input } validate={ required }
    />
  );
}
