import React from "react";
import './cancelButton.css';

const CancelButton = ({onClick}) => (
    <button className="cancel-button" onClick={onClick}>
        Cancelar
    </button>
);

export default CancelButton;