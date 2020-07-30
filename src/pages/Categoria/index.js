import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";
import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  background-color: var(--black);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handler(event) {
    const value = event.target.value;
    const name = event.target.getAttribute("name");
    setValue(name, value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          tag="input"
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
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

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
