import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import './Header.css'

const Header_admin = () => {
    const [selected, setSelected] = useState(null); // Inicializa como null
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const pathMap = {
          '/ajuda': 'ajuda',
          '/escola': 'escola',
          '/relatorio': 'relatorio',
          '/catalogo': 'catalogo'
      };
      setSelected(pathMap[location.pathname.toLowerCase()] || null);
  }, [location]);

      const handleClick = (button, route) => {
        if (selected !== button) { 
            setSelected(button); // Atualiza o estado primeiro
            setTimeout(() => navigate(route), 10); // Navega após uma pequena espera para garantir a animação
        }
    };
return (
    <nav className="navbar">

    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="white" />
    </svg>

    
     
      <div className={`nav-item ${selected === 'escola' ? 'selected' : ''}`} onClick={() => handleClick('escola', '/escola')}>
        Escolas
      </div>
      <div className={`nav-item ${selected === 'catalogo' ? 'selected' : ''}`} onClick={() => handleClick('catalogo', '/catalogo')}>
        Catálogo
      </div>
      <div className={`nav-item ${selected === 'relatorio' ? 'selected' : ''}`} onClick={() => handleClick('relatorio', '/relatorio')}>
        Relatórios
      </div>
      <div className={`nav-item ${selected === 'ajuda' ? 'selected' : ''}`} onClick={() => handleClick('ajuda', '/ajuda')}>
        Ajuda
      </div>
    
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="white" />
    </svg>
      
    </nav>
  );

};

export default Header_admin;


