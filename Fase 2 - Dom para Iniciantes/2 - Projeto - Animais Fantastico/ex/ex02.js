/**
 * forEach e Arrow Function
 * ---
 * 
 * [forEach]
 * Constantemente vamos selecionar uma lista de itens do dom. 
 * A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
 * 
 * - Parâmetros do forEach
 *      O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. 
 *      Esse função pode receber três parâmetros: 'valorAtual', 'index' e 'array';
 * 
 * - forEach e Array
 *      forEach é um método de Array, alguns objetos array-like possuem este método.
 *      Caso não possua, o ideal é transformá-los em uma array.
 * 
 * [Arrow-Function]
 * Sintaxe curta em relação a function expression.
 * Basta remover a palavra chave 'function ()' e adicionar a fat arrow '() =>' após os argumentos.
 * 
 * - Argumentos e Parênteses
 *      1 - Argumento único não precisa de parênteses.              [item => {}]
 *      2 - Multiplos argumentos precisam de parênteses.            [(item, index) => {}]
 *      3 - Sem argumentos precisa dos parênteses, mesmo vazio.     [() => {}]
 * 
 * - Return
 *      É possível omitir as chaves {} para uma função que retorna uma linha.
 *      itens.forEach((item) => console.log(item));
 *      Não é permitido fechar a linha com ';' dentro do forEach.
 */
console.log("\n\n", "Exercício - 02");

// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p');
p.forEach((e) => console.log(e));

// Mostre o texto dos parágrafos no console
p.forEach((e) => console.log(e.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
let i = 0;
imgs.forEach((item, index) => console.log(item, index));
imgs.forEach( () => console.log(i++));
imgs.forEach(() => i++);