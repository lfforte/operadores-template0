// EXERCICIO DE FIXAÇÃO

///---------------Prática 3 - operadores

const anoNascimento = Number(prompt("Digite o ano de seu nascimento."));
const anoNascimentoAcompanhante = Number(prompt("Digite o ano de nascimento de seu acompanhante."));
const anoAtual = Number(prompt("Digite o ano Atual"));

let suaIdade = anoAtual - anoNascimento;
let acompanhanteIdade = anoAtual - anoNascimentoAcompanhante;

console.log("Sua idade é:", suaIdade);
console.log("A idade do(a) acompanhante(a) é:", acompanhanteIdade);

console.log("O usuário e seu acompanhante tem maioridade?",((suaIdade>=18)&&(acompanhanteIdade>=18)));
console.log("O usuário ou seu acompanhante tem maioridade?",((suaIdade>=18)||(acompanhanteIdade>=18)));
console.log("O usuário e seu acompanhante tem maioridade?",!((suaIdade>=18)||(acompanhanteIdade>=18)));