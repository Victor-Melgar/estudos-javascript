// 1 - criando uma função
function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
};

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("Outra função");

// Meus exemplos de função

function testeDeFuncao() {
    console.log("Testando pela segunda vez");
}

testeDeFuncao();

function testeDeFuncaoTres(tdft) {
console.log(`Testando função pela terceira vez: ${tdft}`);
};

testeDeFuncaoTres("Teste Três!");

const testeDeFuncaoQuatro = function() {
 console.log("Teste de função quatro")
};

testeDeFuncaoQuatro();

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
};

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// Meus exemplos de return
const e = 30;
const f = 50;
const g = 100;
const h = 430;

function soma(n3, n4) {
    return n3 + n4;
};

const valor = soma(e, f);

console.log(valor);

console.log(soma(g, h));

const o = 40;
const p = 60;
const t = 400;
const n = 140;

function soma(z1, z2) {
    return z1 + z2;
};

const valorCerto = soma(o, p);

console.log(valorCerto);

console.log(soma(t, n));

// 3 - escopo da função
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função: ${y}`);
}

console.log(`Y fora da função: ${y}`);

testandoEscopo();
// Meus exemplos de escopo
let j = 70;

function testandoEscopoDois() {
    let j = 90;
    console.log(`O valor de dentro da função é: ${j}`);
};

testandoEscopoDois();

j = 80;

console.log(`O valor de fora da função é: ${j}`);

testandoEscopoDois();

// 4 - escopo aninhado
let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30;

        if (true) {
            let m = 40;

            console.log(m);
        }

        console.log(m);
    }
    console.log(m);
}

escopoAninhado();

console.log(m);

// Meus exemplos de escopo aninhado
let k = 100;

function escopoAninhadoDois() {
    let k = 200; 

    if (true) {
        let k = 300;

        if (true) {
            let k = 400;

            console.log(k);
        }
        console.log(k);
    }
    console.log(k);
}

escopoAninhadoDois();

console.log(k);

// 5 - arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function");
  };
  
  testeArrow();
  
  const parOuImpar = (n) => {
    if (n % 2 === 0) {
      console.log("Par");
      return;
    }
  
    console.log("Impar");
  };
  
  parOuImpar(5);
  parOuImpar(6);

//  Meus exemplos de arrow function
const testeArrowDois = () => {
    console.log("Esta é uma arow de function");
};

testeArrowDois();

const parOuImparDois = (n) => {
    if (n % 2 === 0) {
        console.log("Par")
    }

    console.log("Impar");
};

parOuImpar(5);
parOuImpar(6);
parOuImpar(90);
parOuImpar(60);
parOuImpar(59);
parOuImpar(67);

// 6 - mais sobre de arrow function
const raizQuadrada = (x) => {
    return x * x;
  };
  
  const raizQuadrada2 = (n) => n * n;
  
  console.log(raizQuadrada(4));
  console.log(raizQuadrada2(9));
  console.log(raizQuadrada(8));
  
  const helloWorld = () => console.log("Hello!");
  
  helloWorld();

// 7 - argumentos opcionais
const multiplication = function (n, m) {
    if (m === undefined) {
      return n * 6;
    } else {
      return m * n;
    }
  };
  
  console.log(multiplication(5, 9));
  console.log(multiplication(4));
  
  const greeting = (name) => {
    if (!name) {
      console.log("Olá!");
      return;
    }
  
    console.log(`Olá ${name}!`);
  };
  
  greeting();
  greeting("José");
  

// 8 - argumentos com valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
  };
  
  console.log(customGreeting("Matheus"));
  
  console.log(customGreeting("João", "Bom dia"));
  
  const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
      console.log(text);
    }
  };
  
  repeatText("Testando");
  repeatText("Agora repete 5 vezes", 5);

// 9 - closure
function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

// Exemplos de closure
function someFunctionDois() {
    let exemplo = "Alguma coisa dois"

    function display() {
        console.log(exemplo);
    }

    display();
}

someFunctionDois();

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
      return n * m;
    };
  };
  
  const c1 = multiplicationClosure(5);
  
  const c2 = multiplicationClosure(10);
  
  console.log(c1);
  console.log(c2);
  
  console.log(c1(5));
  console.log(c2(10));

//   Mais exemplos de closure
const multiplicationClosureDois = (p) => {
    return (q) => {
        return p * q;
    };
};

const d1 = multiplicationClosureDois(6);

const d2 =  multiplicationClosureDois(100);

console.log(d1);
console.log(d2);

console.log(d1(3));
console.log(d2(5));

// 11 - Recursão
const untilTen = (n, m) => {
    if (n < 10) {
      console.log("A função parou de executar!");
    } else {
      const x = n - m;
  
      console.log(x);
  
      untilTen(x, m);
    }
  };
  
  untilTen(100, 7);
  
  // infinite recursion, tomar cuidado
  // function run() {
  //   console.log("Executando...");
  //   run();
  // }
  
  // run();
  
  function factorial(x) {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  
  const num = 6;
  
  const result = factorial(num);
  
  console.log(`O fatorial do número ${num} é ${result}`);