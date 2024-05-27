import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {
  // Usando o useContext uma vez para obter todos os valores necessários do contexto
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      // Toggle para mostrar ou esconder o carrinho ao clicar no botão
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      {/* Ícone do carrinho */}
      <AiOutlineShoppingCart />
      {/* Exibe o número de itens no carrinho apenas se houver itens */}
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
