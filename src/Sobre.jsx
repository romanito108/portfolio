import React, { useState } from "react";
import "./sobre.css"; // Importando o CSS


function Sobre() {
  return (
    <div className="ContainerAbout">
      <div className="contentWrapper">
        <div className="titulo-sobre">Sobre</div>
      <div className="image-wrapper">
        <img src="/img/about2.png" alt="Minha foto" className="about-image" />
      </div>
        <div className="textAbout">
          <p>
          Profissional Front-End com 4 anos de experiência em criação de experiências digitais. Especializado na criação de sites visualmente atraentes e altamente funcionais para atender às necessidades dos clientes.
Graduado em Jornalismo pela PUC-Rio, utilizando habilidades de comunicação para priorizar a entrega de informações aos usuários. 
Criativo e sempre em busca de novas ideias para aprimorar projetos e superar expectativas. 
Excelente capacidade de comunicação e colaboração, aberto a feedbacks e conversas para impulsionar o crescimento profissional. 
Comprometido em expandir constantemente conhecimentos e habilidades no desenvolvimento front-end para criar experiências digitais ainda mais impactantes. 
          </p>
        </div>
      </div>
    </div>
  );
}



export default Sobre;