// import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../index.css";
import "./styles.css";
// import compra01 from "../../assets/imovel_compra_destaque_01.png";
// import compra02 from "../../assets/imovel_compra_destaque_02.png";
// import compra03 from "../../assets/imovel_compra_destaque_03.png";
// import compra04 from "../../assets/imovel_compra_destaque_04.png";
// import compra05 from "../../assets/imovel_compra_destaque_05.png";
// import locacao01 from "../../assets/imovel_locacao_destaque_01.png";
// import locacao02 from "../../assets/imovel_locacao_destaque_02.png";
// import locacao03 from "../../assets/imovel_locacao_destaque_03.png";
// import locacao04 from "../../assets/imovel_locacao_destaque_04.png";
// import locacao05 from "../../assets/imovel_locacao_destaque_05.png";
import bg from "../../assets/background.png";
// import Purchase from "../../components/Purchase";
import Hire from "../../components/Hire";

// const dbCompra = [compra01, compra02, compra03, compra04, compra05];

// const dbLocacao = [locacao01, locacao02, locacao03, locacao04, locacao05];

export default function Home() {
  // const [compra, setCompra] = useState(compra01);
  // const [locacao, setLocacao] = useState(locacao01);

  // useEffect(() => {}, [compra]);

  return (
    <div className="home">
      <div className="home-background">
        <img src={bg} alt="" />
      </div>
      <Header />
      {/* <Purchase /> */}
      <Hire />
      {/* <div className="home-position-body">
        <div className="home-body">
          <div className="home-body-purchase">
            <h1>Destaque Compra</h1>
            <div className="home-body-purchase-position">
              <div className="home-body-purchase-left">
                <div className="home-body-onfocus">
                  <img src={compra} alt="" />
                </div>
                <div className="home-body-selections">
                  {dbCompra.map((e) => {
                    return (
                      <>
                        <div className="home-body-selected">
                          <img
                            src={e}
                            alt=""
                            onClick={() => {
                              setCompra(e);
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="home-body-purchase-right">
                <p className="home-description-align">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt id eligendi libero rem molestias dolorem minus fuga,
                  deserunt reiciendis ipsa nobis odit est labore, laudantium
                  officia? Ducimus voluptatem expedita recusandae, nemo nihil
                  magnam eveniet facere commodi quasi quam cumque, tenetur porro
                  suscipit similique quis perspiciatis. Debitis libero enim
                  fugit aperiam?
                </p>
                <button className="global-btn">Mais informações</button>
              </div>
            </div>
            <button className="global-btn">Ver todos</button>
          </div>

          <div className="home-body-hire">
            <h1>Destaque Locação</h1>
            <div className="home-body-hire-position">
              <div className="home-body-hire-left">
                <p className="home-description-align">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero necessitatibus dolorum repellendus autem non minus cum
                  blanditiis cupiditate sed quibusdam, perspiciatis ex. Nostrum
                  temporibus itaque modi quae dolores ipsum nam quis possimus
                  illum consequuntur reprehenderit, ducimus quibusdam natus
                  aperiam eos, architecto provident! Repellat reiciendis
                  laboriosam animi impedit laudantium est inventore.
                </p>
                <button className="global-btn">Mais informações</button>
              </div>

              <div className="home-body-hire-right">
                <div className="home-body-onfocus">
                  <img src={locacao} alt="" />
                </div>
                <div className="home-body-selections">
                  {dbLocacao.map((e) => {
                    return (
                      <>
                        <div className="home-body-selected">
                          <img
                            src={e}
                            alt=""
                            onClick={() => {
                              setLocacao(e);
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="global-btn">Ver todos</button>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
