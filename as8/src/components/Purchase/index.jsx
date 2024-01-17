import "styles.css";
import "../../index.css";
import compra01 from "../../assets/imovel_compra_destaque_01.png";
import compra02 from "../../assets/imovel_compra_destaque_02.png";
import compra03 from "../../assets/imovel_compra_destaque_03.png";

const pdCompra = [compra01, compra02, compra03];

export default function Purchase() {
  return (
    <div className="purchase">
      <div className="purchase-products">
        <img src={pdCompra[0]} alt="" />
        <h2>Apartamento - Venda</h2>
        <span>Coqueiros, Florianópolis/SC</span>
        {/* Icone de régua*/}
        <h3>m2</h3>
        {/* Icone de Cama */}
        <h3>qnt quartos</h3>
        {/* Icone de Carro com garagem */}
        <h3>vaga garagem</h3>
        <span>Valor:</span>
        {/* valor do imovél */}
      </div>
    </div>
  );
}
