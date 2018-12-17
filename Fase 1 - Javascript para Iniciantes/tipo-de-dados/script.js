/**
 * Existem 7 tipos de Dados
 * Todos são primitivos exceto os objetos. (Primitivos são dados imutáveis.)
 */
var nome = "Saulo";             // String - Frases
var idade = 24;                 // Number - Números
var possuiFaculdade = true;     // Boolen - Verdadeiro ou Falso
var time;                       // Undefined - Não definido
var comida = null;              // Null - Nulo
var simbolo = Symbol();         // Symbol - Simbolos
var objeto = {};                // Object - Objetos

/**
 * Para verificar o tipo de dados, use typeof. 
 */
console.log("O tipo do nome é:", typeof nome);
console.log("Cuidado com o null, pois null é igual a", typeof comida);

/**
 * Podemos concatenar uma String com outoras.
 * Use o atributo '+' para 'somar' as strings.
 */
var sobrenome = "Sinesio";
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);
nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

/**
 * Template String
 * Você pode passar expressões / variáveis dentro de ${}.
 */
var gols = 1000;

var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`;
console.log(`${frase1} | ${frase2}`);

/**
 * Exercício
 * 
 * Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
 */

// Declare uma variável contendo uma string.
var texto = "isso é uma string";

// Declare uma variável contendo um número dentro de uma string.
var textoNumerico = "10";

// Declare uma variável com a sua idade.
var idade = 24;

// Declare uma variável com seu nome e outra com seu sobrenome, e some as mesmas.
var nome = "Saulo", sobrenome = "Sineiso";
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time.
var $texto = "It's time";

// Verifique o tipo da variável contento o seu nome.
console.log(typeof nome);