import React from 'react';
import './uploadButton.css'; // Importando o arquivo CSS

function AddBookButton({ onClick }) {
    return (
        <button className="add-book-button" onClick={onClick}>
            Adicionar Livro
        </button>
    );
}

export default AddBookButton;