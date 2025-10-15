import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contato.css";

function Contato() {
  const formRef = useRef();
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setFeedback("");

    emailjs
      .sendForm(
        "service_1mbnoul",
        "template_m8ne2b8",
        formRef.current,
        "lCZMvXkSykKJkS-pK"
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          setFeedback("Mensagem enviada com sucesso! 🚀");
          formRef.current.reset();
          setEnviando(false);
        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
          setFeedback("Erro ao enviar. Tente novamente.");
          setEnviando(false);
        }
      );
  };

  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <form ref={formRef} className="contato-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="input-group">
          <label htmlFor="assunto">Assunto</label>
          <input type="text" name="assunto" id="assunto" required />
        </div>

        <div className="input-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea name="mensagem" id="mensagem" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn-enviar" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>

        {feedback && (
          <div
            className={`feedback-message ${
              feedback.includes("sucesso") ? "success" : "error"
            }`}
          >
            {feedback}
          </div>
        )}
      </form>

      {/* 🌐 Redes sociais */}
  <div className="social-links">
  <a
    href="https://www.linkedin.com/in/diego-roman-cardoso-dabag-81194a105/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon linkedin"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  <a
    href="https://x.com/romanito_8/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon instagram"
  >
    <i className="fab fa-instagram"></i>
  </a>

  <a
    href="https://twitter.com/seu-usuario"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon twitter"
  >
    <i className="fab fa-twitter"></i>
  </a>
</div>

    </div>
  );
}

export default Contato;
