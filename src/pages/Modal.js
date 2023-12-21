//THIS PAGE IS FOR EXPORTING MODAL DATA JUST IMPORT THIS FILE TO CHANGE COMPONENT INTO A MODAL
import React from 'react';


const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
      <button className="close-modal" onClick={onClose}>
        Close Modal
      </button>
    </div>
  );
};

export default Modal;

/* STEPS TO CREATING A MODAL:
    1. IMPORT MODAL.JS 
    2. CREATE A STATE FOR TRIGGER
    3. CREATE FUNCTIONS FOR OPEN/CLOSE
    4. SET STATE TO TRUE OR FALSE
    5. ONCLICK={} FOR OPEN, ONCLOSE={} FOR CLOSE
*/