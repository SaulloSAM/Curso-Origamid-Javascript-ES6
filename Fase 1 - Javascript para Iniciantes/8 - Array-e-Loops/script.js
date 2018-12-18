/**
 * Array
 * 
 * É um grupo de valores geralmente relacionados.
 * Servem para guardarmos diferentes valores em uma única variável.
 * 
 * Acesse um elemento no array utilizando '[n]'.
 */
var videogame = ['Switch', 'PS4', 'XBOX'];

console.log(videogame[0]);
console.log(videogame[1]);
console.log(videogame[2]);

/**
 * Métodos e Propriedades de uma Array
 * 
 * Existem diversos outros métodos, como "map", "reduce", "forEach" e mais que veremos mais a frente.
 */
videogame.pop(); // Remove o ultimo item, e retorna ele.
videogame.push("3DS"); // Adiciona um item no final do array.
console.log(videogame.length); // Quantidade de elemento no array. 3

/**
 * For Loop
 * 
 * Fazem algo repetidamente até que uma condição seja atingida.
 */
for (var numero = 0; numero < 10; numero++) {
    console.log(numero); // Será executado 10x, exibindo o valor de 0 a 9.
}

/**
 * While Loop
 */
var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}