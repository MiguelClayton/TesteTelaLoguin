import React, { useState } from "react";
import "./Opcoes.css";

function Opcoes({ onSelecionar }) {
  const [selecionado, setSelecionado] = useState(null);

  const opcoes = ["Online", "Presencial", "Consulta"];

  const handleClick = (valor) => {
    setSelecionado(valor);
    onSelecionar(valor);
  };

  return (
    <div className="container-opcoes">
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          className={`opcao ${selecionado === opcao ? "selecionado" : ""}`}
          onClick={() => handleClick(opcao)}>
          {opcao}
        </button>
      ))}
    </div>
  );
}

export default Opcoes;
