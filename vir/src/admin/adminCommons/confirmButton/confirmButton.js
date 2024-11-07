import React from "react";
import './confirmButton.css'

const ConfirmButton = ({onClick}) => (
    <button className="confirm-button" onClick={onClick}>
        Confirmar
    </button>
);

export default ConfirmButton;