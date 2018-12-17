/**
 * Isso é um comentário.
 */

// Isso é um comentário.

/* 
Isso é um comentário.
*/

/**
 * Variáveis
 * Responsável por armazenar dados na memória do computador.
 */
var nome = "saulo";
let idade = "24";
const possuiFaculdade = true;

/**
 * Exibir os valores no console do navegador
 */
console.log(nome, idade, possuiFaculdade);

/**
 * DRY (Don't repeat yourself) - Não seja redundante.
 */
var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;
console.log("Total Preço:", totalPreco);

/**
 * Podemos declarar vareávies na mesma linha.
 */
var sobrenome = "Sinesio", cidade = "São Paulo";
console.log(sobrenome, cidade);

/**
 * Não precisa sempre declarar uma variável com valor.
 * Por padrão o valor de uma variável declarada é 'undefined';
 */
var precoAplicativo;
console.log("Preço do aplicativo:", precoAplicativo);

/**
 * Os nomes das variáveis podem iniciar com [ $, _ ou letras ].
 * São Case 'Sensitive' [ nome é diferente de Nome ].
 * Não podemos usar palavas reservadas [ref: https://www.w3schools.com/js/js_reserved.asp];
 * Camel Case - Deixe suas variáveis mais legiveis [ abrirPagina ]
 */

/**
 * Hosting
 * As variáveis são jogadas para o inicio do código, mas os valores atribuidos não.
 * Cuidado ao declarar variáveis. o usu da variável será permitido da linha abaixo da declaração.
 */
console.log("Antes da variável:", comida);
var comida = "pizza";
console.log("Depois da variável:", comida);

/**
 * Mudar o valor da variável.
 * usando o tipo const não é possível trocar o valor após a primeira declaração.
 */
var valor1 = "saulo";
console.log("Sem mudar:", valor1);
valor1 = "Sinesio";
console.log("Mudou:", valor1);

/**
 * Exercício
 * 
 * Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
 */
console.log(""); /* Apenas para pular uma linha no console */

// Declarar uma variável com o seu nome.
var meuNome = "Saulo";
// Declarar uma variável com a sua idade.
var minhaIdade = "24";
// Declarar uma variável com a sua comida favorida e não atribuir valor.
var minhaComidaFavorita;
// Atribuir valor a sua comida favorita.
minhaComidaFavorita = "Yakisoba";
// declarar 5 variáveis diferentes sem valores.
var valor1, valor2, valor3, valor4, valor5;

console.log(nome, idade, minhaComidaFavorita);