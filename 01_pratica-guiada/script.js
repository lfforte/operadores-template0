//CODIGO AQUI

///---------------Prática 1 - operadores
const precoProduto = Number(prompt("Digite o valor do produto."));
const desconto = Number(prompt("Digite o desconto."));

const precoComDesconto = ((precoProduto * desconto)/100);

console.log("O valor do desconto é de R$"+desconto);
console.log("O valor do produto com desconto é de R$"+precoComDesconto);