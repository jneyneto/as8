import locacao01 from "../../assets/imovel_locacao_destaque_01.png";
import "../../index.css";
import "./styles.css";

export default function Hire() {
  return (
    <div className="hire-position">
      <div className="hire">
        <h1>Imovéis para Locação</h1>
        <div className="hire-product-guide">
          <div className="hire-product">
            <img className="hire-product-image" src={locacao01} alt="" />
            <div className="hire-product-container">
              <h2>Galpão - Locação</h2>
              <span>Serraria, São José/SC</span>
              <div className="hire-product-infos">
                {/* Icone de régua*/}
                <span>96m²</span>
                {/* Icone de Cama */}
                {/* <span>3 quartos</span> */}
                {/* Icone de Carro com garagem */}
                <span>3 vagas</span>
              </div>
              <div className="hire-product-infos-amount">
                <span>Valor:</span>
                <strong>R$ 7.000,00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
