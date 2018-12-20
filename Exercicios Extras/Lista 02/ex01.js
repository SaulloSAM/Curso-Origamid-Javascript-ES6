/**
 * Exercício 01
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar um inteiro e imprime o módulo desse inteiro.
 */
function executar_ex01 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));
    alert(`O múdulo de |${a}| é ${(a >= 0) ? a : (a * (-1))} `);
    // Final do Exercício.
}