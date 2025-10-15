import React, { useState } from "react";
import "./Projetos.css";

function Projetos() {
  const Projetos = [
    {
      icon: "fa-code",
      title: "Ericka Kellner",
      description:
        "Criei a interface do site da publicitária Ericka Kellner. As orientações e formato foram todas conversadas organizadas com a própria profissonal. O site foi desenvolvido através da Wordpress",
      image: "/img/ericka.jpeg",
      link: "https://erickakellner.com.br" // exemplo
    },
    // {
    //   
    //   title: "Larvie",
    //   description:
    //     "A loja de roupas Larvie foi feita pela Shopify. A loja foi desenvolvida com layout também editado no código fonte da plataforma.",
    //   image: "/img/larvie.png",
    //   link: "https://larvie.com.br" // exemplo
    // },
    {

      title: "Salomão Advogados",
      description:
        "Foi o meu primeiro projeto, por estar começando, usei HTML e CSS puro para criar o site do escritório de advocacia.",
      image: "/img/salomao.png",
      link: "https://salomaoadvs.com.br/" // exemplo
    },
    {
   
      title: "Volos Comunicação",
      description:
        "Usando minha experiência com JavaScript, desenvolvi uma landing page para a empresa de comunicação.",
      image: "/img/volos.png",
      link: "https://voloscomunicacao.com.br/" // exemplo
    },
    {
      
      title: "EQS Corretora",
      description:
        "A pedido da cliente, desenvolvi uma interface básica sobre as áreas em que a Corretora atua.",
      image: "/img/eqs.jpg",
      link: "https://eqscorretora.com/" // exemplo
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === Projetos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Projetos.length - 1 : prev - 1));
  };

  return (
    <div className="main-section" id="servicos">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-slide">
          {Projetos[current].image && (
            <a
              href={Projetos[current].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Projetos[current].image}
                alt={Projetos[current].title}
                className="carousel-image"
              />
            </a>
          )}
          <i className={`fa ${Projetos[current].icon}`}></i>
          <h3>{Projetos[current].title}</h3>
          <p>{Projetos[current].description}</p>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {Projetos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
