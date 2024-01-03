import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="home-header">
      <img className="home-header-logo" src={logo} alt="Logo" />
      <div className="home-header-nav">
        <h5 className="qualquercoisa">Inicio</h5>
        <h5 className="qualquercoisa">Sobre</h5>
        <h5 className="qualquercoisa">Contato</h5>
        <h5 className="qualquercoisa">Imóveis</h5>
      </div>
    </header>
  );
}
