/**
 * Exercício 02
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar dois inteiros e imprime esses inteiros em ordem crescente.
 * DESAFIO: Como trocar os valores de duas variáveis sem utilizar variáveis auxiliares?
 */
function executar_ex02 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));
    let b = Number(prompt("Digite outro número"));
    alert(`Valores em Ordem: ${(a < b) ? (a+' '+b) : (b+' '+a) }`);
    // Final do Exercício.
}