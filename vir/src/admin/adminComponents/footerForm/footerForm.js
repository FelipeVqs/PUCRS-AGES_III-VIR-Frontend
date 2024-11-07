import React from 'react';
import ConfirmButton from '../../adminCommons/confirmButton/confirmButton';
import CancelButton from '../../adminCommons/cancelButton/cancelButton';
import './footerForm.css'

const FooterForm = ({ onCancel, onConfirm }) => (
  <div className='footer-form'>
    <CancelButton onClick={onCancel}/>
    <ConfirmButton onClick={onConfirm}/>
    
  </div>
);

export default FooterForm;