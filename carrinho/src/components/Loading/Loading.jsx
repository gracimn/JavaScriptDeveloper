import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import './Loading.css';

// Componente de carregamento
function Loading() {
  // Retorna o ícone de carregamento
  return (
    <div className="loading-container"> {/* Contêiner adicional para adicionar mais estilos se necessário */}
      <BiLoaderAlt className="loading-icon" /> {/* Classe CSS para o ícone de carregamento */}
    </div>
  );
}

export default Loading;
