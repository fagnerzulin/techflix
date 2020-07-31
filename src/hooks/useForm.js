import { useState } from "react";

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handler,
    clearForm,
  };
}

export default useForm;
