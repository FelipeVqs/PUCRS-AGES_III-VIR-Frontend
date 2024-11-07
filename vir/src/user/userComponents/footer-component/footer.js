import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.css';

const Footer = () => {
  const [selected, setSelected] = useState(null); // Inicializa como null
  const navigate = useNavigate();
  const location = useLocation();

  // Sincroniza o estado `selected` com a rota atual
  useEffect(() => {
    if (location.pathname === '/Library') {
      setSelected('search');
    } else if (location.pathname === '/Bookshelf') {
      setSelected('home');
    } else if (location.pathname === '/Synopsis') {
      setSelected('synopsis');
    }
  }, [location]);

  // Função para lidar com o clique nos botões da barra de navegação
  const handleClick = (button, route) => {
    if (selected !== button) { // Só muda se o botão for diferente do atual
      setSelected(button);
      navigate(route);
    }
  };

  return (
    <footer className="footer">
      <div className="rectangle">
        {/* Botão para a estante de livros */}
        <div
          className={`left-home ${selected === 'home' ? 'selected' : ''}`}
          onClick={() => handleClick('home', '/Bookshelf')}
        >
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.4127 26.3492V12.3175C28.4127 12.0612 28.353 11.8084 28.2384 11.5792C28.1238 11.35 27.9574 11.1506 27.7524 10.9968L16.1968 2.33016C15.9111 2.11585 15.5635 2 15.2063 2C14.8492 2 14.5016 2.11585 14.2159 2.33016L2.66032 10.9968C2.4553 11.1506 2.28889 11.35 2.17428 11.5792C2.05967 11.8084 2 12.0612 2 12.3175V26.3492C2 26.787 2.17392 27.2069 2.48351 27.5165C2.79309 27.8261 3.21298 28 3.65079 28H10.254C10.6918 28 11.1117 27.8261 11.4213 27.5165C11.7308 27.2069 11.9048 26.787 11.9048 26.3492V21.3968C11.9048 20.959 12.0787 20.5391 12.3883 20.2295C12.6979 19.92 13.1177 19.746 13.5556 19.746H16.8571C17.295 19.746 17.7148 19.92 18.0244 20.2295C18.334 20.5391 18.5079 20.959 18.5079 21.3968V26.3492C18.5079 26.787 18.6819 27.2069 18.9914 27.5165C19.301 27.8261 19.7209 28 20.1587 28H26.7619C27.1997 28 27.6196 27.8261 27.9292 27.5165C28.2388 27.2069 28.4127 26.787 28.4127 26.3492Z" stroke="#F4663B" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Botão para a página de pesquisa */}
        <div
          className={`right-search ${selected === 'search' ? 'selected' : ''}`}
          onClick={() => handleClick('search', '/Library')}
        >
          <svg width="30" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 28L19.3333 19.3333M2 12.1111C2 13.4389 2.26153 14.7537 2.76966 15.9805C3.27779 17.2072 4.02257 18.3218 4.96148 19.2607C5.90038 20.1996 7.01502 20.9444 8.24176 21.4526C9.46849 21.9607 10.7833 22.2222 12.1111 22.2222C13.4389 22.2222 14.7537 21.9607 15.9805 21.4526C17.2072 20.9444 18.3218 20.1996 19.2607 19.2607C20.1996 18.3218 20.9444 17.2072 21.4526 15.9805C21.9607 14.7537 22.2222 13.4389 22.2222 12.1111C22.2222 10.7833 21.9607 9.46849 21.4526 8.24176C20.9444 7.01502 20.1996 5.90038 19.2607 4.96148C18.3218 4.02257 17.2072 3.27779 15.9805 2.76966C14.7537 2.26153 13.4389 2 12.1111 2C10.7833 2 9.46849 2.26153 8.24176 2.76966C7.01502 3.27779 5.90038 4.02257 4.96148 4.96148C4.02257 5.90038 3.27779 7.01502 2.76966 8.24176C2.26153 9.46849 2 10.7833 2 12.1111Z" stroke="#F4663B" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Botão para os livros */}
        <div
          className={`center-book ${selected === 'synopsis' ? 'selected' : ''}`}
          onClick={() => handleClick('synopsis', '/Synopsis')}
        >
          <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7146 4.97662C21.8105 2.61615 28.929 -0.334899 35.4291 4.97662V28C28.929 22.6885 21.8105 25.6395 18.7146 28M18.7146 4.97662C15.6187 2.61615 8.50011 -0.334899 2 4.97662V28C8.50011 22.6885 15.6187 25.6395 18.7146 28M18.7146 4.97662V28" stroke="#F4663B" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
