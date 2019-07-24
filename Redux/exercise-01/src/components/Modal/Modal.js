import React from 'react';

const Modal = (props) => {
  return (
    <>
      <div className='backdrop' onClick={props.onModalClose}></div>    
      <div className='modal'>
        {props.children}
        <button type="button" onClick={props.onModalClose} className="close-btn">Close</button>
      </div>
    </>
  );
}

export default Modal;