import { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./Nome.css";

function Nome({ onChange = () => {} }) {
  const [name, setName] = useState("");
  const [valor, setValor] = useState("");

  const handleChange = (e) => {
    const newName = e.target.name === "name" ? e.target.value : name;
    const newValor = e.target.name === "valor" ? e.target.value : valor;

    setName(newName);
    setValor(newValor);

    onChange({
      name: e.target.name === "name" ? e.target.value : name,
      valor: e.target.name === "valor" ? e.target.value : valor,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            className="opcaoNome"
            placeholder="Exemplo: Plano Gold"
            onChange={handleChange}
          />
        </div>

        <div>
          <p className="divisinha">Valor</p>

          <label htmlFor="valor"></label>
          <NumericFormat
            id="valor"
            name="valor"
            className="opcaoNome"
            placeholder="R$ 0,00"
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            onVolumeChange={({ value, formattedValue }) => {
              handleChange({
                target: {
                  name: "valor",
                  value: formattedValue,
                },
              });
            }}
          />
        </div>
      </form>
    </div>
  );
}
export default Nome;
