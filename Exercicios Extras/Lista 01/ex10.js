/**
 * Exercício 10
 * ---
 * 
 * DESAFIO: Escreva um programa que faz o contrário do programa pedido no exercício anterior: imprime 'impar'
 * se o inteiro digitado for par e imprime 'par' caso contrário.
 */
function executar_ex10 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número inteiro maior ou igual a 0"));
    alert(`O número digitado é ${(a % 2) ? 'par' : 'impar'}.`);

    /*  Expresão Ternária.
        (condição) ? true : false;

        Em javascript numeros diferente de 0 === true, e 0 === false. Sendo assim o próprio resultado irá retornar um valor true ou false.
        Caso a condição seja false === 0. É Impar
        Caso a condição seja true !== 0. É Par
    */
    // Final do Exercício.
}