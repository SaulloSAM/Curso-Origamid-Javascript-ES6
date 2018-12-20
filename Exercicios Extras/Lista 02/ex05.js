/**
 * Exercício 05
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar dois inteiros e:
 * Imprime ENTRADA INVALIDA se o segundo for igual a 0;
 * Imprime o quociente e o resto da divisão euclidiana desses inteiros caso contrário.
 */
function executar_ex05 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número"));
    let b = Number(prompt("Digite outro número"));

    if (!b)             alert("ENTRADA INVÁLIDA");
    else                alert(`[Quociente: ${Math.trunc(a/b)}], [Resto: ${a % b}]`);
    // Final do Exercício.
}