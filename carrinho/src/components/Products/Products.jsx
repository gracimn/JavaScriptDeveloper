// Importa os módulos necessários do React e de outros arquivos
import React, { useEffect, useContext } from "react";

// Importa o estilo CSS específico para este componente
import "./Products.css";

// Importa a função fetchProducts responsável por buscar os produtos na API
import fetchProducts from "../../api/fetchProducts";

// Importa o componente ProductCard usado para renderizar cada produto
import ProductCard from "../ProductCard/ProductCard";

// Importa o componente Loading para mostrar durante o carregamento dos produtos
import Loading from "../Loading/Loading";

// Importa o contexto global do aplicativo
import AppContext from "../../context/AppContext";

// Define o componente funcional Products
function Products() {

  // Extrai o estado e os métodos de contexto do contexto global
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  // Utiliza o hook useEffect para buscar os produtos ao montar o componente
  useEffect(() => {
    // Chama a função fetchProducts com a query "iphone" para obter os produtos
    fetchProducts("iphone").then((response) => {
      // Atualiza o estado dos produtos com a resposta da API
      setProducts(response);
      // Define loading como false para indicar que o carregamento terminou
      setLoading(false);
    });
  }, [setProducts, setLoading]); // Executa o useEffect sempre que setProducts ou setLoading forem alterados

  // Retorna o JSX do componente Products
  return (
    // Condicionalmente renderiza o componente Loading se loading for true
    (loading && <Loading />) || (
      // Renderiza a seção de produtos se loading for false
      <section className="products container">
        {/* Mapeia os produtos e renderiza um ProductCard para cada um */}
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

// Exporta o componente Products
export default Products;

//Definição do componente Products: Define o componente funcional Products.

// Contexto Global: Extrai os estados e métodos de contexto do contexto global do aplicativo usando o hook useContext.

// Hook useEffect: Utiliza o hook useEffect para buscar os produtos da API assim que o componente é montado.

// Renderização Condicional: Condicionalmente renderiza o componente Loading se o estado loading for true, caso contrário, renderiza a seção de produtos com os produtos retornados pela API, usando o componente ProductCard para cada produto.