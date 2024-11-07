import React from "react";
import iconX from './iconX.png';
import './headerForm.css'

const HeaderForm = ({title, onClose}) => (
    <div className="header-form">
        <p className="title-header">{title}</p>
        <div className="close-button" onClick={onClose}>
            <img src={iconX} alt="Fechar" className="icon-x"/>  
        </div>
    </div>
);

export default HeaderForm;