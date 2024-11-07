import React, { useState, useEffect } from 'react';
import './bookshelf.css';
import Header from '../../userComponents/header/header';
import BookShelfList from '../../userController/bookshelf-list/bookshelf-list';
import Footer from '../../userComponents/footer-component/footer';
import { CiSearch } from "react-icons/ci";

const BookShelf = () => {
  const [libraryData, setLibraryData] = useState({ listItems: [] });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token'); 
       
        const response = await fetch(`https://virback.totalclan.com.br/books/get_user_books`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da biblioteca.');
        }

        const data = await response.json();
        setLibraryData({ listItems: data });  
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar livros da biblioteca:', error);
      }
    };

    fetchData();
  }, []);

  
  const filteredItems = Array.isArray(libraryData.listItems)
    ? libraryData.listItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase())
      
      )
    : [];

  return (
    <>
      <Header pageTitle="Minha Estante" />

      <div className="search-component">
        <input
          type="text"
          placeholder="Pesquise por título ou autor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <CiSearch
          style={{
            position: 'absolute',
            right: '50px'
          }}
        />
      </div>

      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          
          <BookShelfList
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
        
            totalPages={item.total_pages} 
            pagesRead={item.page_number}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>Nenhum livro encontrado.</p>
      )}

      <Footer />
    </>
  );
};

export default BookShelf;
