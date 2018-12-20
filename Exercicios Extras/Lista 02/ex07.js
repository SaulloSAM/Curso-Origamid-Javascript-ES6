/**
 * Exercício 07
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar um inteiro e:
 * Imprime JOVEM se esse inteiro for menor que 18;
 * Imprime ADULTO se for maior ou igual a 18 e menor que 60;
 * Imprime IDOSO caso contrário.
 */
function executar_ex07 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));

    if (a < 18)                     alert("JOVEM");
    else if (a >= 18 && a < 60)     alert("ADULTO");
    else                            alert("IDOSO");
    // Final do Exercício.
}