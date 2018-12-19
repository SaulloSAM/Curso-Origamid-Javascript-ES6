/**
 * Escopo de Função
 * 
 * Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
 * 
 * O escopo evita o conflito entre nomes.
 */
function mostrarCarro () {
    var carro = "Funca";
    console.log(carro);
}

mostrarCarro(); // Fusca no console;
// console.log(carro); // Erro, caro não foi declarado.

/**
 * Variável Global (Erro).
 * 
 * Declarar variáveis sem a palavra chave "var", "const" ou "let",
 * cria uma variável que pode ser acessadam em qualquer escopo (global).
 * 
 * Isso é um erro.
 */

'use strict' // Evita o erros de variáveis.
function mostrarCarro () {
    carro = "Funca";
    console.log(carro);
}

mostrarCarro(); // Fusca no console;
// console.log(carro); // Erro, caro não foi declarado.

/**
 * Escopo de Função (Pai)
 * 
 * Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
 */
var carro = "Funca";

function mostrarCarro () {
    console.log(carro);
}

/**
 * Escopo de Bloco
 * 
 * Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de
 * declararmos uma variável é utilizando "const" e "let", pois estas respeitam o escopo de bloco.
 */
if (true) {
    let carros = "fusca";
    console.log(carros);
}

// console.log(carros);

// Var vaza o bloco, mesmo com a condição falsa, a variável ainda será declarada.
// utilizando hoisting e o valor ficará undefined.

// Const e Let no lugar de Var
// A partir de agora utilizaremos apenas "const" e "let" para declararmos variáveis.

// For loop
// Ao utilizar "var" dentro de um "for" loop, que é um bloco, o valor da variável utilizada irá "vazar".

/**
 * {} cria um bloco
 * 
 * Chaves "{}" criam um escopo de bloco, não confundir com a criação de objetos "= {}"
 */
{
    let nome = "Saulo";
    let sobrenome = "Sinesio";
    console.log(`${nome} ${sobrenome}`);
}

// console.log(nome); // irá dar erro, pois está fora do escopo.

/**
 * Const
 * 
 * Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável,
 * evitando bugs no código.
 */
const mes = "janeiro";

mes = "dezembro"; // Erro - Tentou modificar a variável;
const semana; // Erro - Declarou sem valor;

const data = {
    dia: 28,
    mes: "janeiro",
    ano: 2018
}

data.dia = 1; // Funciona.
data = "dezembro"; // Erro - Tentou modificar a variável;

// Let
// Mantém o escopo no bloco, impede a receclaração, mas permite a modificação do valor.

/**
 * Exercícios
 */

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(cor, marca, portas); // marca e portas não pertencem ao escopo.

// Como corrigir o erro abaixo?
const dois = 2; // Definindo fora do escopo da função.

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

// trocando "var" por "let"
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);