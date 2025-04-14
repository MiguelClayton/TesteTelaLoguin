import { useLocation } from "react-router-dom";
import "./Barracarregamento.css";

function Barracarregamento() {
  const Routes = ["/psp", "/cspp", "/fim"];
  const location = useLocation();
  const index = Routes.indexOf(location.pathname);
  const percent = ((index + 1) / Routes.length) * 100;
  return (
    <div className="progresso_container">
      <div className="barra_progresso" style={{ width: `${percent}%` }} />
    </div>
  );
}
export default Barracarregamento;
