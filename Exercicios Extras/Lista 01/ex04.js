/**
 * Exercício 04
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar dois inteiros e imprime o quociente e o resto da
 * divisão euclidiana desses inteiros.
 * O programa deve imprimir ambas as respostas em um único alert.
 * Você pode supor que o usuário não tentará dividir por zero.
 * 
 * Dica: Use 'Math.trunc' para receber apenas o qouciente.
 */
function executar_ex04 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número inteiro"));
    let b = Number(prompt("Digite outro número inteiro diferente de 0"));
    alert(`Resultado da operação ${a} / ${b} é [Quociente: ${Math.trunc(a / b)}] e [Resto: ${a % b}]`);
    // Final do Exercício.
}



