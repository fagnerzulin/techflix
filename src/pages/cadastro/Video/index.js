import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import { ButtonForm } from "../../../components/ButtonForm";

function CadastroVideo() {
  const history = useHistory();
  const { handler, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          //alert("Video Cadastrado com Sucesso");
          history.push("/");
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
        />

        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
