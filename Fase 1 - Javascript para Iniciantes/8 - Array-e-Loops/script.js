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

/**
 * Array e Loop
 */
var $console = ['Switch', 'PS4', 'XBOX'];
for (var i = 0; i < $console.length; i++) {
    console.log($console[i]);
}

/**
 * Break
 * 
 * O loop irá parar caso encontro a  palavra Break
 */
for (var i = 0; i < $console.length; i++) {
    console.log($console[i]);

    if ($console[i] === "PS4") { break; }
}

/**
 * ForEach
 * 
 * 'forEach' é um método que executa uma função para cada item da array.
 * É uma forma mais simples de utilizarmos um loop com array (ou array-like).
 * 
 * Podemos passar os seguintes parâmetros "item", "index" e "array".
 */
$console.forEach (function (item) {
    console.log(item);
});

/**
 * Exercício
 */

// Crie um array com os anos que o brasil ganhou a copa
var copa = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop para mostrar no console a seguinte mensagem.
// `O brasil ganhou a copa de ${ano}`
copa.forEach((ano) => {
    console.log(`O brasil ganhou a copa de ${ano}`);
});

// Interaja com o loop nas frutas abaixo e para ao chegar na 'Pera'
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var i = 0; i < frutas.length; i++) {
    if (frutas[i] === "Pera") { 
        console.log(`Parou - ${frutas[i]}`); 
        break;
    }
}

// Coloque a última fruta do array acima em uma variável, sem remover a mesma do array; 
var ultimaFruta = frutas[(frutas.length - 1)];
console.log(`Ultima Fruta - ${ultimaFruta}`);