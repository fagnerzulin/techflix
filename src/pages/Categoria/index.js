import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";

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

        <button>Cadastrar</button>
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
