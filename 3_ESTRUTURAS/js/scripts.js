// 1 - Variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Battisti";

console.log(nome);

const idade = 39;

console.log(idade);

// idade = 32;

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais aprofundamento de variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";

const nomeCompleto = "João da Silva";

console.log(nomecompleto, nomeCompleto);

// Simbolos permitidos para criação de variáveis
let _teste = "válido";

let $teste = "válido";

console.log(_teste, $teste);

// 3 - Prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// const name = prompt("Digite o seu nome:");

// console.log(`Olá ${name}, tudo bem ?`)

// 4 - Alert
// alert("Testando");

// const z = 10

// alert(`O número é ${z}`);

// 5 - Math.x
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.10));

console.log(Math.ceil(5.10));

// 6 - Objeto Console
console.log("teste");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;

if (m > 5) {
  console.log("M é maior que 5!");
}

const user = "João";

if (user === "João") {
  console.log("Olá João!");
}

if (user === "Maria") {
  console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - else
const loggedIn = false;

if (loggedIn) {
  console.log("Usuário autenticado");
} else {
  console.log("Usuário não autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos!");
} else {
  console.log("Os números não são alto suficientes!");
}

// 9 - Else if
if (1 > 2) {
    console.log("Teste");
  } else if (2 > 3) {
    console.log("Teste 2");
  } else if (5 > 1) {
    console.log("Agora sim!");
  }
  
  const userName = "Matheus";
  const userAge = 31;
  
  if (userName === "José") {
    console.log("Bem vindo José!");
  } else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos!");
  } else {
    console.log("Nenhuma condição aceita!");
  }

// 10 - While

// 11 - Do While
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);