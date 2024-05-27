const fetchProducts = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;

//Este código é uma função que simplifica a busca de produtos na API do Mercado Livre e retorna os resultados da pesquisa. Presumivelmente, esse código pode ser usado em um projeto que envolve a integração com a API do Mercado Livre para recuperar produtos com base em uma consulta específica.