import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to="/psp">
          <button className={style.botao_estilizado}>navbar</button>
        </Link>
      </li>
      <li className={style.item}>
        <Link to="/fim">
          <button>Avançar navbar</button>
        </Link>
      </li>
    </ul>
  );
}
export default Navbar;
