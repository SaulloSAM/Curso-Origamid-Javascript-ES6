/**
 * Exercício 06
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar as duas dimensões de um retângulo e imprime o perímetro e a área desse retângulo.
 */
function executar_ex06 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite uma das dimensões de um retângulo"));
    let b = Number(prompt("Digite a outra dimensão do retângulo"));
    alert(`Resultado da operação: [Perímetro: ${2 * a * b}], [Área: ${a * b}]`);
    // Final do Exercício.
}