import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Spinner from "./Spinner";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Servicos from "./Servicos";
import Contato from "./Contato";

import CursorEffect from "./CursorEffect";
import "./global.css";
import "./stars.scss";
import "./menu.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setShowIntro(section === 'intro');
  };

  return (
    <div className="app-container">
      <CursorEffect />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Menu 
            onNavigate={handleNavigation} 
            currentSection={activeSection} 
          />
          
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          {/* Tela de Introdução */}
          {showIntro && (
            <div className={`intro-screen ${!activeSection ? 'visible' : 'hidden'}`}>
              <div className="intro-container">
                <div id="title">
                  <span>Boas-vindas ao meu portfólio</span>
                  <div id="subtitle">
                    <span>Sou o Diego Roman, desenvolvedor Front especializado em experiências digitais.</span>
                    <span>Navegue pelo site para conhecer mais sobre meu trabalho!</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo Principal */}
          <div className={`main-content ${activeSection ? 'visible' : 'hidden'}`}>
            {activeSection === 'sobre' && <Sobre />}
            {activeSection === 'projetos' && <Projetos />}
            {activeSection === 'servicos' && <Servicos />}
            {activeSection === 'contato' && <Contato />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
