import "./Cspp.css";
import { useNavigate, Link } from "react-router-dom";
import Opcoes from "../components/Opcoes";
import { useState } from "react";
import Nome from "../components/Nome";
import { FaArrowRight } from "react-icons/fa";

function Cspp() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [dadosPlanos, setDadosPlano] = useState({ name: "", valor: "" });
  const navigate = useNavigate();

  const handleAvancar = () => {
    if (opcaoSelecionada && dadosPlanos.name && dadosPlanos.valor) {
      const dadosCompletos = {
        fruta: opcaoSelecionada,
        plano: dadosPlanos,
      };
      localStorage.setItem("dadosSelecionados", JSON.stringify(dadosCompletos));
      navigate("/fim");
    } else {
    }
  };
  return (
    <div>
      <div>
        <h1 className="titulo">Crie seu primeiro plano</h1>
        <div>
          <p className="divisinha">Modalidade</p>
          <Opcoes onSelecionar={setOpcaoSelecionada} />
          <p className="divisinha">Nome</p>
          <Nome onSelecionar={setDadosPlano} />
        </div>
        <p className="descricao">
          Mais detalhes do seu plano voce pode configurar posteriormente na sua
          área de adiministrador da platafoprma.
        </p>

        <ul className="list">
          <div className="item1">
            <li className="item">
              <Link to="/fim" className="nsublinhado">
                <p className="link">Criar depois</p>
              </Link>
            </li>
          </div>

          <div>
            <li className="item">
              <Link to="/psp" className="nsublinhado">
                <button className="botao_estilizado">Retornar</button>
              </Link>
            </li>
          </div>

          <div>
            <li className="item">
              <Link to="/fim" className="nsublinhado">
                <button className="botao_estilizado" onClick={handleAvancar}>
                  Avançar
                  <FaArrowRight />
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Cspp;
