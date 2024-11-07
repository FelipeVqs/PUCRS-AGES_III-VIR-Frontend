import React from 'react';
import List from '../../userCommons/generic-list/generic-list';
import './library-list.css';

const LibraryList = ({ id, title, image, author, totalPages, category, onAddBook }) => {
  return (
    <List title={title} image={image}>
      <div className="library-item-info">
        <div className="library-item-description">
          <p className="library-item-author">{author}</p>
          <p className="library-item-total-pages">{totalPages} páginas</p>
        </div>
        <button 
          className="library-item-add-button" 
          onClick={() => onAddBook(id)} // Chama a função onAddBook com o id do livro
        >
          Adicionar livro
        </button>
      </div>
    </List>
  );
};

export default LibraryList;