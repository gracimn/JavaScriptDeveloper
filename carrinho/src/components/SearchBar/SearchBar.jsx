import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts'; // Importando função para buscar produtos
import AppContext from '../../context/AppContext';

function SearchBar() {
  // Obtendo funções e estado do contexto
  const { setProducts, setLoading } = useContext(AppContext);
  // Estado para armazenar o valor de busca
  const [searchValue, setSearchValue] = useState('');

  // Função para lidar com a busca de produtos
  const handleSearch = async (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    setLoading(true); // Define o estado de carregamento como verdadeiro

    // Realiza a busca de produtos com base no valor de busca atual
    const products = await fetchProducts(searchValue);

    // Atualiza a lista de produtos no contexto
    setProducts(products);
    setLoading(false); // Define o estado de carregamento como falso
    setSearchValue(''); // Limpa o valor de busca após a busca
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {/* Input para digitar o termo de busca */}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      {/* Botão para acionar a busca */}
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
