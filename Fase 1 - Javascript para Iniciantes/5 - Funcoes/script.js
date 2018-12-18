/**
 * Funções
 * 
 * Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
 */
function areaQuadrado (lado) {
    // retorna o quadrado do valor passado como parâmetro.
    return lado * lado;
}

// Chamada de função dentro do console.log.
// sera impresso na tela o valor de retorno da função.
console.log("Função - areaQuadrada()")
console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 24
console.log(areaQuadrado(2)); // 04

function pi () {
    return 3.14;
}

var total = 5 * pi();
console.log(`Valor Total: ${total}`);

/**
 * Parâmetros e Argumentos
 * 
 * Ao 'criar' uma função, você pode definir 'parâmetros'.
 * Ao 'executar' uma função, você pode passar 'argumentos'.
 * 
 * Você pode definir 1, nenhum, ou mais do que 1 parâmetros para uma função.
 */
function imc (peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log("Função - img()");
console.log(imc(72, 1.65));

/**
 * Parênteses executa a função
 * 
 * Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer.
 */
function corFavorita (cor) {

    if (cor === "azul") {
        return "você gosta do céu.";
    } else if (cor === "verde") {
        return "você gosta da floresta.";
    } else {
        return "você não gosta de nada.";
    }

}

console.log(`Cor favorita - ${corFavorita()}`);

/**
 * Argumentos podem ser funções
 * 
 * Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
 * 
 * Funções anônima são aquelas enm que o nome da função não é definido,
 * escritas como function () {} ou () => {}
 */
addEventListener("click", function () {
    console.log("1 - Ativou um evento de clique.");
});

// Outra maneira.
function ativarClique () {
    console.log("2 - Ativou um evento de clique.");
}

addEventListener("click", ativarClique);

/**
 * Pode ou não retornar um valor
 * 
 * Quando não definimos o return, ela irá retornar 'undefined'.
 * O código interno da função é executado normalmente, independente de existir retorno ou não.
 */
function calcIMC (peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

calcIMC(75, 1.65); // Mostra no console o IMC.
console.log(calcIMC(75, 1.65)); // Mostra no console o IMC e retorna undefined.

/**
 * Valores de Retorno
 * 
 * Uma função pode retornar qualquer tipo de dados e até outras funções.
 * 
 * Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa idéia.
 */
function terceiraIdade (idade) {

    if (typeof idade !== 'number') {
        return "Informe sua idade!";
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }

}

console.log("Função - terceiraIdade()");
console.log(terceiraIdade("20"));
console.log(terceiraIdade(20));
console.log(terceiraIdade(65));

/**
 * Escopo
 * 
 * Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
 */
function precisoVisitar (paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

console.log(totalPaises); //Erro, totalPaises não definido.

// Uma forma de resolver é declarando o valor fora da função (é válido usar os valores fora da função, dentro dela).
// Chamamos esse método de 'Escopo Léxico'.
// Funções conseguem acessar variáveis que foram criadas no contexto 'pai'. 
var totalPaises = 193;

function precisoVisitar2 (paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

console.log(totalPaises);

/**
 * Hoisting
 * 
 * Antes de executar uma função, o JS "move" todas as funções declaradas para a memória.
 */
categoriaIMC (80, 1.80);

function categoriaIMC (peso, altura) {
    console.log(`IMC - ${peso / (altura ** 2)}`);
}

/**
 * Exercício
 * 
 */

// Crie uma função para verificar se um valor é Truthy
function isTrue (value) { return !!value; }
console.log(isTrue(""));
console.log(isTrue("Olá mundo"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro (lado1, lado2, lado3, lado4) {
    return lado1 + lado2 + lado3 + lado4;
}
console.log(`Perímetro - ${perimetro(4, 4 ,4 ,4)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function showFullName (name, lastName) {
    return `${name} ${lastName}`;
}
console.log(`Menu nome é ${showFullName("Saullo", "SAM")}`);

// Crie uma função que verifica se um número é par
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`O número 5 é par? - ${isEven(5)}`);
console.log(`O número 68 é par? - ${isEven(68)}`);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function whatType (value) {
    return typeof value;
}
console.log(`Meu tipo é: ${whatType("Olá")}`);
console.log(`Meu tipo é: ${whatType(10)}`);
console.log(`Meu tipo é: ${whatType(true)}`);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
    // O css - overflow: hidden não vai permitir o scroll.
    console.log("Saulo Sinesio");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));  