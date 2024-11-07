import React, { useState, useEffect } from 'react';
import './bookcard.css';
import { fetchSimulatedBookData } from './simulacao_test'; //VAI SAIR QUANDO EXISTIR O BACKEND
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

const BookCard = () => {

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    totalPages: 0,
    pagesRead: 0,
    image: ''
  });

  const navigate = useNavigate();
  const handleReading = () => {
    navigate('/Book'); // Redireciona para a página Home
  };

  useEffect(() => {
    const fetchData = async () => {
      // QUANDO O BACKEND EXISTIR, SUBSTITUIR O TRECHO DEMARCADO POR:
      /*
      const response = await fetch('http://url_da_chamada/nome_da_tabela/{id}');
      const data = await response.json();
      setBookData(data);
      
      */
      const data = await fetchSimulatedBookData();
      setBookData(data);
      //
    };

    fetchData();
  }, []);

  const percentageRead = (bookData.pagesRead / bookData.totalPages) * 100;

  return (
    <div className="book-card">

      <img src={bookData.image} alt={bookData.title} className="book-image" />

      <div className="book-details">

        <div className='book-names'>
          <h3 className="book-title">{bookData.title}</h3>
          <p className="book-author">{bookData.author.toUpperCase()}</p>
        </div>

        <div>
          <div className='book-progress-container'>
            <div className="progress-bar">
              <div className="progress-bar-done" style={{ width: `${percentageRead}%` }}></div>
            </div>
            <p className="progress-percentage">{Math.round(percentageRead)}%</p>
          </div>
        </div>
        <div className="page-info">
          <span>{bookData.pagesRead} páginas lidas</span>
          <span>faltam {bookData.totalPages - bookData.pagesRead} páginas</span>
        </div>
        <div className='button-container'>
          <button className="continue-button" onClick={handleReading}>Continuar Leitura</button>
        </div>
      </div>

    </div>
  );
};

export default BookCard;
