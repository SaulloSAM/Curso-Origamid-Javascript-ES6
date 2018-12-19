/**
 * Operadores de Atribuição
 * 
 * Podem funcionar como formas abreviadas.
 */
var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;

/**
 * Operador Ternáirio
 * 
 * Abreviação de condicionais com "if" e "else"
 * 
 * Geralmente utilizamos quando precisamos abstrair um valor para uma variável, dependendo de uma condição
 */
var idade = 19;
var podeBeber = (idade >= 18) ? "Pode Beber" : "Não Pode Beber";
console.log(podeBeber);