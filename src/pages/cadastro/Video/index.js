import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import { ButtonForm } from "../../../components/ButtonForm";
import videosRepository from "../../../repositories/videos";
import categoriesRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handler, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categoriaFromSever) => {
      setCategorias(categoriaFromSever);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push("/");
            });
        }}
      >
        <FormField
          tag="input"
          label="Título do Vídeo: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handler}
        />

        <FormField
          tag="input"
          label="URL: "
          type="text"
          name="url"
          value={values.url}
          onChange={handler}
        />

        <FormField
          tag="input"
          label="Categoria: "
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handler}
          suggestions={categoryTitles}
        />

        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
