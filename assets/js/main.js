const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//nos retorna uma promise -> uma promessa de resposta
fetch(url) // -> usa o get
  .then((response) => response.json())
  .then((jsonBody) => console.log(jsonBody))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Requisição concluida");
  });
console.log("pudim");
