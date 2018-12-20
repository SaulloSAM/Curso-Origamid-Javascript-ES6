/**
 * Exercício 03
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar um inteiro e:
 * Imprime 0 se esse inteiro for menor que zero;
 * Imprime 10 se esse inteiro for maior que dez;
 * Simplesmente imprime esse inteiro caso contrário.
 */
function executar_ex03 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));

    if (a < 0)          alert(0);
    else if (a > 10)    alert(10);
    else                alert(a);
    // Final do Exercício.
}