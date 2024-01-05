import "./styles.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-nav">
        <h5 className="qualquercoisa-footer">Navegação</h5>
        <h5 className="qualquercoisa-footer">Início</h5>
        <h5 className="qualquercoisa-footer">Sobre Nós</h5>
        <h5 className="qualquercoisa-footer">Contato</h5>
      </div>

      <div className="home-footer-nav">
        <h5 className="qualquercoisa-footer">Imóveis</h5>
        <h5 className="qualquercoisa-footer">Compra</h5>
        <h5 className="qualquercoisa-footer">Locação</h5>
      </div>

      <div className="home-footer-nav">
        <h5 className="qualquercoisa-footer">Atendimento</h5>
        <p className="home-footer-nav-textos">Ligue para (48) 3024-0001</p>
        <p className="home-footer-nav-textos">WhatsApp "(48) 9.9924-7138</p>
        <p className="home-footer-nav-textos">Email imobiliaria@as8.com.br</p>
      </div>

      <div className="home-footer-nav">
        {/* <img src={iconeInstagram} alt="Instagram AS8" /> */}
      </div>

      <img className="home-footer-logo" src={logo} alt="Logo AS8" />
    </footer>
  );
}
