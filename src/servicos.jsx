import React from "react";
import "./servicos.css";

function Servicos() {
const services = [
  {
    icon: "fa-code",
    title: "Desenvolvimento Web",
    description: "Criação de sites modernos, rápidos e responsivos em JavaScript."
  },
  {
    icon: "fa-pencil-ruler",
    title: "Web Design",
    description: "Layout personalizado, UI/UX focado em usabilidade e experiência do usuário."
  },
  {
    icon: "fa-camera",
    title: "Edição de Fotos",
    description: "Tratamento de imagens e otimização visual para web e redes sociais."
  },
  {
    icon: "fa-video",
    title: "Edição de Vídeos",
    description: "Edição criativa e profissional para apresentações, reels e websites."
  },

{
  icon: "fa-tools",
  title: "Manutenção & Suporte",
  description: "Atualizações, correções e suporte contínuo para manter seu site sempre no ar."
},

{
  icon: "fa-plug",
  title: "Integrações Web",
  description: "Conexão do site com APIs, formulários e redes sociais."
}
];

  return (
    <div className="main-section" id="servicos">
      <div className="container">
       
        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-list" key={index}>
              <i className={`fa ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicos;