import "./styles.css";
import "../../index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-position-body">
        <div className="home-body">
          <div className="home-body-purchase">
            <h1>Destaque Compra</h1>
            <div className="home-body-purchase-position">
              <div className="home-body-purchase-left">
                <div className="home-body-purchase-onfocus">Imagem</div>
                <div className="home-body-purchase-selections">
                  <div>seta</div>
                  <div className="home-body-purchase-selected">IMG</div>
                  <div>seta</div>
                </div>
              </div>

              <div className="home-body-purchase-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt id eligendi libero rem molestias dolorem minus fuga,
                  deserunt reiciendis ipsa nobis odit est labore, laudantium
                  officia? Ducimus voluptatem expedita recusandae, nemo nihil
                  magnam eveniet facere commodi quasi quam cumque, tenetur porro
                  suscipit similique quis perspiciatis. Debitis libero enim
                  fugit aperiam?
                </p>
                <button>Mais informações</button>
              </div>
            </div>
            <button>Ver todos</button>
          </div>

          <div className="home-body-hire">
            <h1>Destaque Locação</h1>
            <div className="home-body-hire-position">
              <div className="home-body-hire-left">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero necessitatibus dolorum repellendus autem non minus cum
                  blanditiis cupiditate sed quibusdam, perspiciatis ex. Nostrum
                  temporibus itaque modi quae dolores ipsum nam quis possimus
                  illum consequuntur reprehenderit, ducimus quibusdam natus
                  aperiam eos, architecto provident! Repellat reiciendis
                  laboriosam animi impedit laudantium est inventore.
                </p>
                <button>Mais informações</button>
              </div>

              <div className="home-body-hire-right">
                <div className="home-body-purchase-onfocus">Imagem</div>
                <div className="home-body-hire-selections">
                  <div>seta</div>
                  <div className="home-body-purchase-selected">IMG</div>
                  <div>seta</div>
                </div>
              </div>
            </div>
            <button>Ver todos</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
