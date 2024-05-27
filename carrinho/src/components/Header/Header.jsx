import React from 'react';
// Importando o botão do carrinho diretamente
import CartButton from '../CartButton/CartButton';
// Importando a barra de pesquisa diretamente
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {
  return (
    // Componente de cabeçalho
    <header className="header">
      {/* Container para agrupar elementos */}
      <div className="container">
        {/* Componente da barra de pesquisa */}
        <SearchBar />
        {/* Componente do botão do carrinho */}
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
