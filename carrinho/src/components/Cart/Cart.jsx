import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  // Utilize useContext para acessar o contexto
  const { cartItems, isCartVisible } = useContext(AppContext);

  // Calcule o preço total utilizando reduce
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    // Use className condicionalmente com base em isCartVisible
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {/* Mapeie os itens do carrinho e renderize CartItem para cada um */}
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      {/* Renderize o preço total formatado */}
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;


//Sim, isso resume bem o que o componente Cart faz. Ele mapeia os itens do carrinho e os renderiza usando o componente CartItem. Além disso, calcula o preço total dos itens no carrinho e o formata em moeda brasileira (Real) utilizando a função formatCurrency. O preço total é exibido no final do carrinho.