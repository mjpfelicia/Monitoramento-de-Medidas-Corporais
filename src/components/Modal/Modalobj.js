import React from 'react';
import '../Modal/Modalobj.css';

const Modalobj = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay-obj">
      <div className="modal-content-obj">
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
  };
  export default Modalobj;
