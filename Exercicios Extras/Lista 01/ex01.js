/**
 * Escreva um programa que pede para o usuário digitar dois inteiros e imprime
 * a soma desses inteiros.
 */

var inteiroA, inteiroB, soma;

inteiroA = Number(prompt("Digite um número inteiro"));
inteiroB = Number(prompt("Digite outro número inteiro"));

soma = inteiroA + inteiroB;

alert(`O resultado da operação (${inteiroA} + ${inteiroB}) é ${soma}`);