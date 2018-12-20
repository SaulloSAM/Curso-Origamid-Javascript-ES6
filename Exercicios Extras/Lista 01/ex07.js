/**
 * Exercício 07
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar um inteiro e imprime o inverso desse inteiro.
 * Ou seja, se o usuário digita 10, o programa imprime −10. Se digita −42, imprime 42.
 * 
 * O inverso de um valor pode ser obtido utilizando - como operador unário. Por exemplo, para inverter o 
 * valor de uma variável x você pode usar a atribuição x = -x.
 * 
 * Mas note que você não precisa conhecer esse uso do operador para fazer o exercício. De que outras 
 * maneiras você pode inverter um número?
 */
function executar_ex07 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número inteiro"))
    alert(`O inverso de ${a} é ${ a * (-1)} (Multiplicando por -1)`);
    // Final do Exercício.
}