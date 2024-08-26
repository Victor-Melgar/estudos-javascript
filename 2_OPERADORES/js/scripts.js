// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -124);

// 2 - Operações Aritméticas
console.log(2 + 9);
console.log(12 - 5);
console.log(250 / 10);
console.log(25 * 30);

console.log(5 + (2 * 30));

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Tipo Strings
console.log("Um texto");
console.log('Mais um texto');
console.log('13');

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

// 5 - Símbolos Especiais em String
console.log("Testando \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " Tudo" + " Bem?");
console.log('Testando' + ' com' + ' crase!');

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// 8 - Booleans
console.log(true);

console.log(30 > 50);

console.log(10 > 3);

console.log("------------------");

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Comparação de idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

console.log("------------------");

// 11 - Operadores lógicos

// AND - true apenas se os dois lados forem verdadeiros
console.log(true && true);

console.log(true && false);

console.log(false && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log("------------------");


// OR - para ser true, um lado como true é suficiente
console.log(false || true);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 < 2 || 5 > 100);

console.log(5 < 2 || 500 > 100);

console.log(5 < 20|| 5 > 100);

console.log("------------------");

// NOT - este operador inverte a comparação
console.log(!true);

console.log(!false);

console.log(!5 > 2);

console.log(!5 < 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

// Ele não é identico mas é igual, porque os dois não possuem nenhum valor - o tipo deles não é igual
console.log(null === undefined);

console.log(null == undefined);

// Os valores não são iguais ao bolean (false e true)
console.log(null == false);

console.log(undefined == false);

console.log(null == true);

console.log(undefined == true);

// 13 - Conversão de tipo automática
console.log(5 * null);

console.log("teste" * "opa");

// Conflitos númericos
console.log("10" + 1);

console.log(10 + 1);

console.log("10" - 1);

console.log("10" * 2);

console.log("10" / 2);