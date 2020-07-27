import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import dados from "./data/dados_iniciais.json";
import Carosel from "./components/Carousel";
import Footer from "./components/Footer";

const AppWarapper = styled.div`
  background-color: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWarapper>
      <Menu />

      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={dados.categorias[0].videos[0].videoDescription}
      />

      <Carosel category={dados.categorias[0]} />
      <Carosel category={dados.categorias[1]} />
      <Carosel category={dados.categorias[2]} />
      <Carosel category={dados.categorias[3]} />
      <Carosel category={dados.categorias[6]} />

      <Footer />
    </AppWarapper>
  );
}

export default App;
