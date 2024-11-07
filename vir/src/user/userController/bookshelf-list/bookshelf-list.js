import React from 'react';
import List from '../../userCommons/generic-list/generic-list';
import './bookshelf-list.css'; 

const BookshelfList = ({ id, title, image, author, totalPages, pagesRead }) => {
  const percentageRead = totalPages > 0 ? (pagesRead / totalPages) * 100 : 0;

  // Função para armazenar o bookId e redirecionar o usuário para a página de sinopse
  const handleContinueReading = () => {
    // Armazena o bookId no localStorage
    localStorage.setItem('bookId', id);
    // Redireciona o usuário para a página de sinopse
    window.location.href = '/Synopsis';
  };

  return (
    <List title={title} image={image}>
      <div className="bookshelf-item-info">
        <p className="bookshelf-item-author">{author.toUpperCase()}</p>
        <div className='bookshelf-statistics'>
          <div className='book-progress-container'>
            <div className="progress-bar">
              <div className="progress-bar-done" style={{ width: `${percentageRead}%` }}></div>
            </div>
            <p className="progress-percentage">{Math.round(percentageRead)}%</p>
          </div>
          <div className="page-info">
            <span>{pagesRead} páginas lidas</span>
            <span>faltam {totalPages - pagesRead} páginas</span>
          </div>
        </div>
        <button 
          className="bookshelf-item-add-button" 
          onClick={handleContinueReading}  // Salva o bookId e redireciona para a página de sinopse
        >
          Continuar Leitura
        </button>
      </div>
    </List>
  );
};

export default BookshelfList;