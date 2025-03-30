import React, { useState } from "react";
import "./menu.css";

function Menu({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (section) => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um item
    onNavigate(section); // Notifica o componente pai sobre a navegação
  };

  return (
    <section>
      {/* Ícone do menu sanduíche */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu */}
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="menuItems">
          <li>
            <a 
              href='#' 
              data-item='Home'
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick('intro');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href='#' 
              data-item='About'
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick('sobre');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href='#' 
              data-item='Projects'
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick('projetos');
              }}
            >
              Projects
            </a>
          </li>

          <li>
            <a 
              href='#' 
              data-item='Serviços'
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick('servicos');
              }}
            >
            Serviços
            </a>
          </li>





        </ul>
      </nav>
    </section>
  );
}

export default Menu;