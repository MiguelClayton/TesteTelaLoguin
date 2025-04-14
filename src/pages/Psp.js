import "./Psp.css";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Info } from "lucide-react";

function Psp() {
  return (
    <div className="conteudo">
      <div>
        <h1 className="titulo">Personalize sua plataforma</h1>
        <p className="descricao">
          Personalise a sua platafoprma com o logotipo de sua consultoria.
          Clique na imagem ao lado para enviar o seu logotipo.
        </p>
        <div className="peca">
          <div className="quadradoe">
            <Upload />
          </div>
          <div className="quadradoa">
            <div>
              <p className="descricao">
                Recomendamos que as dimensões da sua foto sejam de 512x512px nas
                extensões .JPG ou .PNG
              </p>
            </div>
            <div className="quadradin">
              <Info size={30} color="#000" />
              <p className="descricaozinha">
                Se você ainda não tem um logotipo, você poderá inserir
                posteriormente na plataforma.
              </p>
            </div>
          </div>
        </div>
        <div className="espaco" />
        <div className="rodape">
          <ul className="list">
            <li className="item">
              <Link to="/fim" className="nsublinhado">
                <p className="link">Personalizar depois</p>
              </Link>
            </li>
            <div className="espacoentre" />
            <li className="item">
              <Link to="/cspp" className="nsublinhado">
                <button className="botao_estilizado">
                  Avançar
                  <FaArrowRight />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Psp;
