/**
 * Exercício 08
 * ---
 * 
 * Escreva um programa que pede para o usuário digitar dois inteiros e imprimir qual porcentagem do segundo o primeiro representa.
 * Por exemplo: se o usuário digita 6 e 12, o programa imprime Porcentagem: 50%,
 * pois 6 é a metade de 12. Você pode supor que o segundo não é zero.
 * Calcular a porcentagem consiste em uma simples regra de três. Existem duas alternativas:
 * 
 * (a) dividir o primeiro pelo segundo e multiplicar esse quociente por 100;
 * 
 * (b) multiplicar o primeiro por 100 e dividir esse produto pelo segundo.
 * 
 * Como a divisão não é exata, as alternativas não são equivalentes. Escreva um programa para cada uma.
 */
function executar_ex08 () {
    // Inicio do Exercício.
    let a = Number(prompt("Digite um número diferente de 0"));
    let b = Number(prompt("Digite outro número"));
    alert(`Cálculo A: ${ Math.round(a / b) * 100 } | Cálculo B ${ Math.round(a * 100) / b }`);
    // Final do Exercício.
}