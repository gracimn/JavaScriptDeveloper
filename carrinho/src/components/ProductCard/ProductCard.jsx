import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  // Extrair dados do objeto de produto
  const { title, thumbnail, price } = data;

  // Usar o useContext para acessar o contexto do carrinho
  const { cartItems, setCartItems } = useContext(AppContext);

  // Função para adicionar um item ao carrinho
  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      
      {/* Imagem do produto */}
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      {/* Informações do produto */}
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      {/* Botão para adicionar ao carrinho */}
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

// Propriedade esperada pelo componente
ProductCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProductCard;
