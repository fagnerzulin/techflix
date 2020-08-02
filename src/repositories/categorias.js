import config from "../config";

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respServer) => {
    if (respServer.ok) {
      const resposta = await respServer.json();
      return resposta;
    }
    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respServer) => {
    if (respServer.ok) {
      const resposta = await respServer.json();
      return resposta;
    }
    throw new Error("Não foi possível pegar os dados :(");
  });
}

export default { getAllWithVideos, getAll };
