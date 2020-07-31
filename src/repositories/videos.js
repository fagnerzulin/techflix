import config from "../config";

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create() {
  return fetch(`${URL_VIDEOS}`, {
    method: "POST",
  }).then(async (respServer) => {
    if (respServer.ok) {
      const resposta = await respServer.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados :(");
  });
}

export default { create };
