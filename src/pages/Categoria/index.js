import React, { useState, useEffect } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";
import useForm from "../../hooks/useForm";
import { ButtonForm } from "../../components/ButtonForm";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#",
  };

  const { values, handler, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://techflix-app.herokuapp.com/categorias";
    fetch(URL).then(async (respServer) => {
      const resposta = await respServer.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo} </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
      >
        <FormField
          tag="input"
          label="Título da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handler}
        />

        <FormField
          tag="textarea"
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handler}
        />

        <FormField
          tag="input"
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handler}
        />

        <ButtonForm>Cadastrar</ButtonForm>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
