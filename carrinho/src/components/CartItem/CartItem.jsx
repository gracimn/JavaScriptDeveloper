import React, { useContext } from 'react';
import PropTypes from 'prop-types'; 
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  // Função para remover o item do carrinho
  const handleRemoveItem = () => {
    // Filtrar os itens do carrinho, removendo o item atual pelo ID
    const updatedItems = cartItems.filter((item) => item.id !== id);
    // Atualizar o estado dos itens do carrinho
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      {/* Imagem do produto */}
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        {/* Título do produto */}
        <h3 className="cart-item-title">{title}</h3>
        {/* Preço do produto formatado */}
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        {/* Botão para remover o item do carrinho */}
        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

// Definição de propTypes para o componente CartItem, garante consistencia nos dados e identificar erros antes de algum momento você ou outra parte do código fornecer um tipo de dados diferente do esperado para data, o React emitirá um aviso no console do navegador. Isso ajuda a identificar e corrigir erros durante o desenvolvimento.
CartItem.propTypes = {
  data: PropTypes.object.isRequired 
};

export default CartItem;
