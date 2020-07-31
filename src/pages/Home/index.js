import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carosel from "../../components/Carousel";
import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriaComVideos) => {
        setDados(categoriaComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dados[0].videos[0].titulo}
                url={dados[0].videos[0].url}
                videoDescription={dados[0].videos[0].videoDescription}
              />

              <Carosel ignoreFirstVideo category={dados[0]} />
            </div>
          );
        }
        return <Carosel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
