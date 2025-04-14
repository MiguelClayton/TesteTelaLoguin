import { useEffect } from "react";
import "./Fim.css";
import { Link } from "react-router-dom";

function Fim() {
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dadosSelecionados"));
    console.log(dados);
  }, []);
  return (
    <div>
      <div className="central_titulo">
        <h1 className="titulo_fim">FIM</h1>
      </div>
      <div className="central">
        <li className="item_fim">
          <Link to="/cspp" className="nsublinhado">
            <button className="botao_estilizado_fim">Retornar</button>
          </Link>
        </li>
      </div>
    </div>
  );
}
export default Fim;
