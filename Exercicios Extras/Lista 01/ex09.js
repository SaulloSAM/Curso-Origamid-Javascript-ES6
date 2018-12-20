/**
 * Exercício 09
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar um inteiro e imprime se este número é par ou impar.
 * Imprime 'par' se o inteiro digitado for par e imprime 'impar' caso contrário.
 * 
 * Pense no que signica ser par em termos das operações aritméticas básicas.
 * Você pode supor que o usuário não digitará um inteiro negativo.
 */
function executar_ex09 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número inteiro maior ou igual a 0"));
    alert(`O número digitado é ${(a % 2) ? 'impar' : 'par'}.`);

    /*  Expresão Ternária.
        (condição) ? true : false;

        Em javascript numeros diferente de 0 === true, e 0 === false. Sendo assim o próprio resultado irá retornar um valor true ou false.
        Caso a condição seja false === 0. É Par
        Caso a condição seja true !== 0. É Impar
    */
    // Final do Exercício.
}