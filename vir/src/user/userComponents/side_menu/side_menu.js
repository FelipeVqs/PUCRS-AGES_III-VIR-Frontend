import React from 'react';
import './side_menu.css';

const SideMenu = ({ isOpen, toggleMenu, menuRef }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
      <h2 onClick={toggleMenu}>Menu</h2>
      <ul>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
      </ul>
    </div>
  );
};

export default SideMenu;
