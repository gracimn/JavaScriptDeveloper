const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;
//Resumindo, esta função formatCurrency é útil para formatar valores numéricos como strings de moeda no formato desejado, utilizando a localidade e a moeda especificadas. Isso é comum em aplicações web para exibir valores financeiros de forma amigável ao usuário.