import "./styles.css";
import "../../index.css";
import compra01 from "../../assets/imovel_compra_destaque_01.png";

// const pdCompra = [compra01, compra02, compra03];

export default function Purchase() {
  return (
    <div className="purchase-position">
      <div className="purchase">
        <h1>Imovéis a Venda</h1>
        <div className="purchase-product-guide">
          <div className="purchase-product">
            <img className="purchase-product-image" src={compra01} alt="" />
            <div className="purchase-product-container">
              <h2>Apartamento - Venda</h2>
              <span>Coqueiros, Florianópolis/SC</span>
              <div className="purchase-product-infos">
                {/* Icone de régua*/}
                <span>100m²</span>
                {/* Icone de Cama */}
                <span>3 quartos</span>
                {/* Icone de Carro com garagem */}
                <span>2</span>
              </div>
              <div className="purchase-product-infos-amount">
                <span>Valor:</span>
                <strong>R$ 235.000,00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
