import React, { useState, useEffect } from 'react';
import './library.css';
import Header from '../../userComponents/header/header';
import LibraryList from '../../userComponents/library-list/library-list';
import Footer from '../../userComponents/footer-component/footer';
import { CiSearch } from "react-icons/ci";

const Library = () => {
  const [libraryData, setLibraryData] = useState({ listItems: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserIdAndData = async () => {
    try {
      setIsLoading(true); 

      const token = localStorage.getItem('access_token'); // Access token obtido de uma fonte segura

      // Fazendo a requisição para buscar todos os livros do backend
      const booksResponse = await fetch('https://virback.totalclan.com.br/books/get_library_books', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      if (booksResponse.ok) {
        const booksData = await booksResponse.json();
        setLibraryData({ listItems: booksData });
      } else {
        console.error("Erro ao buscar os dados da biblioteca");
        setLibraryData({ listItems: [] });
      }
    } catch (error) {
      console.error("Erro de conexão", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserIdAndData();
  }, []);

  // Função para adicionar livro à biblioteca do usuário
  const addToUserLibrary = async (bookId) => {
   

    const url = `https://virback.totalclan.com.br/books/add_book_to_user/${bookId}`;
    const token = localStorage.getItem('access_token');

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Livro adicionado à biblioteca do usuário com sucesso!");
        fetchUserIdAndData();
      } else {
        console.error("Erro ao adicionar o livro à biblioteca.");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  // Filtro de pesquisa para livros
  const filteredItems = libraryData.listItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header pageTitle="Biblioteca" />

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

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div className="loading-circle"></div>
          <p>Carregando livros...</p>
        </div>
      ) : (
        filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <LibraryList
              key={item.id}
              id={item.id}
              title={item.title}
              author={item.author}
              image={item.cover}
              totalPages={item.totalPages}
              onAddBook={addToUserLibrary}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Nenhum livro encontrado.</p>
        )
      )}

      <Footer />
    </>
  );
};

export default Library;
