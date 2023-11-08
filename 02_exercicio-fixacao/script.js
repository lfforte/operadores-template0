// EXERCICIO DE FIXAÇÃO

///---------------Prática 2 - operadores
const pesoAnterior = Number(prompt("Digite o peso Anterior."));
const pesoAtual = Number(prompt("Digite o peso Atual."));
const altura = Number(prompt("Digite sua Altura."));

let imcAnterior = (pesoAnterior/(altura*altura));
let imcAtual = (pesoAtual/(altura*altura));

console.log("O IMC Atual é maior ou igual ao anterior?",(imcAnterior<=imcAtual));
console.log("O IMC Atual é menor ou igual ao anterior?",(imcAnterior>=imcAtual));