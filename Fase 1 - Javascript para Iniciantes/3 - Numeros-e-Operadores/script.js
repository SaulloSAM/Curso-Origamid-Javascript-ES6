/**
 * Números
 * Precisão de até 15 digitos.
 */
var idade = 24;
var gols = 1000;
var pi = 3.14;
var exp = 2e10;

/**
 * Operadores Aritméticos
 * Lembrando que soma + em Stringo serve para concatenar.
 */
var soma = 100 + 50;            // 150
var subtracao = 100 - 50;       // 50
var multiplicacao = 100 * 2;    // 200
var divisao = 100 / 2;          // 50
var expoente = 2 ** 4;          // 16
var modulo = 14 % 5;            // 4

/**
 * Operadores Aritméticos (Strings).
 * É possível verificar se uma variável é NaN ou não com a função isNaN().
 */
var $soma = "100" + 50;             // "10050"
var $subtracao = "100" - 50;         // 50
var $multiplicacao = "100" * "2";    // 200

// NaN (Not a Number)
var $divisao = "Comprei 10" / "2";
console.log("é um NaN: " + isNaN("Comprei 10") + " - " + $divisao);

/**
 * A ordem importa
 * Começa por multiplicação e divisão, depois por adição e subtração.
 * Parênteses para definir uma expressão
 */
var total1 = 20 + 5 * 2;            // 30
var totla2 = (20 + 5) * 2;          // 50
var total3 = 20 / 2 * 5;            // 50
var total4 = 10 + 10 * 2 + 20 / 2;  // 40

/**
 * Operadores Aritmétricos Unários
 * mesma coisa para decremente --x
 */
var incrementar1 = 5;
console.log(incrementar1++); // Retorna para o console o 5 e depois incremente + 1.
console.log(incrementar1);

var incrementar2 = 5;
console.log(++incrementar2); // Primeiro incrementa +1 depois retorna para o console o 6.
console.log(incrementar2);

/**
 * Operadores Aritmétricos Unários
 * O + e - tenta transformar o valor seguinte em número.
 * 
 * O - antes de um número torna ele negativo.
 */
var frase = 'isso é uma frase, e não um número';
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número).
-idade; // -28 (número).

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

/**
 * Exercício
 * 
 * Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
 */

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log (`Total: ${total}`);

// Crie duas expressões que retornem NaN.
console.log(+"Olá mundo");
console.log(+"10 Reais" + 30);

// Somar a string '200' com o número 50 e retornar 250.
console.log(+"200" + 50);

// Incremente o número 5 e retorne o seu valor incrementado.
var num = 5;
console.log(++num);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = (+numero / 2) + unidade;
console.log(pesoPorDois);