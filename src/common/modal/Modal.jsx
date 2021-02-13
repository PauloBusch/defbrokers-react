import './Modal.css';

import React from 'react';

export default props => {
    const { title, show, handleClose } = props;
    return (
      <div className={ `block ${ show ? '' : 'hide' }` }>
        <div className="modal">
          <div className="header">
            <h2>{ title }</h2>
            <i title="Fechar" className="fas fa-times" onClick={ () => handleClose() }></i>
          </div>
          <div className="body">
            { props.children }
          </div>
          <div className="footer">
            <button onClick={ () => handleClose() }>Fechar</button>
          </div>
        </div>
      </div>
    );
}
