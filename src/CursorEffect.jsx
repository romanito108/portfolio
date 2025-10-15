import React, { useEffect } from "react";
import "./Cursor.css"; // Importa o CSS que cria o visual do cursor

function CursorEffect() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const clickEffect = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 150);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickEffect);
    };
  }, []);

  return <div className="cursor"></div>;
}

export default CursorEffect;
