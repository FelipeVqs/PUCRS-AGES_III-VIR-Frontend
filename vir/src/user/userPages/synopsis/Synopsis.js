import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Synopsis.css';
import Header from '../../userComponents/header/header';
import Footer from '../../userComponents/footer-component/footer';

const Synopsis = () => {
  const [bookData, setBookData] = useState({
    title: '',
    cover: '',
    total_pages: 0,
    page_number: 0,
    description: '',
    published_at: '',
    author: '',
    category_name: '',
    chapter_number: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const bookId = localStorage.getItem('bookId');
        const response = await fetch(`https://virback.totalclan.com.br/books/get_user_book/${bookId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do livro.');
        }

        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error('Erro ao buscar os dados do livro:', error);
      }
    };

    fetchData();
  }, []);

  // Carrega a imagem dinamicamente usando require
  // const imgSrc = bookData.cover ? require(`../../images/${bookData.cover}`) : null;

  const percentageRead = (bookData.page_number / bookData.total_pages) * 100;

  const handleContinueReading = () => {
    navigate('/book');
  };

  return (
    <>
      <Header pageTitle="Sinopse" />
      <div className="synopsis-container">
        <div className="book-title">
          <h1>{bookData.title}</h1>
        </div>
        {/* {imgSrc && <img src={imgSrc} alt={bookData.title} className="synopsis-image" />} Exibe a imagem se disponível */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${percentageRead}%` }}></div>
          </div>
          <span className="progress-percentage">{Math.round(percentageRead)}%</span>
        </div>
        <div className="page-info">
          <span>{bookData.page_number} páginas lidas</span>
          <span className="pages-left">faltam {bookData.total_pages - bookData.page_number} páginas</span>
        </div>
        <div className="book-description">
          <p>{bookData.description}</p>
        </div>
        <div className="book-info">
          <p><strong>Autor:</strong> {bookData.author}</p>
          <p><strong>Gênero:</strong> {bookData.category_name}</p>
          <p><strong>Capítulo:</strong> {bookData.chapter_number}</p>
          <p><strong>Publicado em:</strong> {new Date(bookData.published_at).toLocaleDateString()}</p>
          <p><strong>Total de Páginas:</strong> {bookData.total_pages}</p>
        </div>
        <div className="button-container">
          <button className="continue-button" onClick={handleContinueReading}>
            Continuar leitura
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Synopsis;
