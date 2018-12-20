/**
 * Exercício 08
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar dois inteiros e:
 * Imprime a média aritmética desses inteiros se ambos forem maiores ou iguais a 5;
 * Imprime o menor desses inteiros caso contrário.
 */
function executar_ex08 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));
    let b = Number(prompt("Digite outro número"));

    if (a >= 5 && b >=5)    alert(`Média aritimética: ${(a + b) / 2}`);
    else                    alert(`Menor nota: ${(a < b) ? a : b}`);
    // Final do Exercício.
}