/**
 * Objetos
 * 
 * Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
 * 
 * Propriedades e métodos consistem em nome (chave) e valor.
 */
var pessoa = {
    nome: "Saulo",
    idade: 24,
    prodissao: "Designer",
    possuiFaculdade: true
}
console.log(`Nome: ${pessoa.nome}`);
console.log(`Possui Faculdade: ${pessoa.possuiFaculdade}`);

/**
 * Métodos
 * 
 * É uma propriedade que possui uma função no local do seu valor.
 */
var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * 2;
    },
    perimetro (lado) {
        return this.lados * lado;
    }
}
console.log(`Quadrado - Lados - ${quadrado.lados}`);
console.log(`Quadrado - Area - ${quadrado.area(5)}`);
console.log(`Quadrado - Perimetro - ${quadrado.perimetro(5)}`);

/**
 * Organizar o Código
 * 
 * Objetos servem para organizar o código em pequenas partes reutilizáveis.
 * 
 * Math é um objeto nativo de javascript.
 * Já percebeu que 'console' é um objeto e 'log()' um método?
 */
Math.PI; // 3.14
Math.random() // número aleatório

var pi = Math.PI;
console.log(pi);

/**
 * Dot Notation GET
 * 
 * Acesse propriedades de um objeto utilizando o ponto '.'
 */
var menu = {
    width: 800,
    height: 50,
    background: "#84e"
}

var bg = menu.background;

/**
 * Dot Notation SET
 * 
 * Substitua o valor de uma propriedade utilizando '.' e o '=' após o nome da mesma.
 */
menu.background = "#000";

/**
 * Adicionar Propriedade e Métodos
 * 
 * Basta adicionar um novo nome e definir o valor.
 */
menu.color = "blue";

/**
 * Palavra-Chave 'this'
 * 
 * 'this' irá fazer uma referência ao próprio objeto.
 * 
 * 'this' irá retornar o próprio objeto.
 */
var height = 120;

var meuMenu = {
    width: 800,
    height: 60,
    metadeHeight () {
        return this.height / 2;
    }
}

console.log(`Metade da altura: ${meuMenu.metadeHeight()}`);

/**
 * Protótipo e Herança
 * 
 * O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
 * 
 * 'hasOwnProperty' é um método de 'Object'.
 */
var menu2 = {
    width: 800
}

console.log(`Possui a propriedade 'width: ${menu2.hasOwnProperty("width")}'`);
console.log(`Possui a propriedade 'height: ${menu2.hasOwnProperty("height")}'`);

/**
 * Exercício
 * 
 */

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var usuario = {
    nome: "saulo",
    sobrenome: 'sinesio',
    telefone: '+55 11 9 6625-3485'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
usuario.showName = function () {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
    raca: "labrador",
    idade: 10,
    cor: "preto",
    latir(pessoa) {
        if (pessoa === "homem") {
            return latir;
        }
    }
}

/**
 * Tudo é Objeto
 * -----------------------------------------
 * 
 * String, Números, Boolean, Objetos e mais, possuem propriedades e métodos.
 * Por isso são objetos.
 * 
 * Uma String herda propriedades e métodos da contructor String().
 */
var nome = "saulo";
console.log(`Tamanho: ${nome.length}`); // 5
console.log(`Primeira Letra: ${nome.charAt(1)}`); // a
console.log(`Trocar S por P: ${nome.replace("s", "p")}`); // paulo
console.log(`Nome: ${nome}`); // saulo

/**
 * Números
 * -----------------------------------------
 * 
 * Por um breve momento o número é envolvido em um objeto (coerção),
 * tendo acesso assim as suas propriedades e métodos.
 */
var altura = 1.8;
altura.toFixed(); // 2;
altura.toString(); // "1.8";

/**
 * Funções
 * -----------------------------------------
 */
function areaQuadrado (lado) {
    return area ** 2;
}

areaQuadrado.toString();
// Retornor ->
/*
"function areaQuadrado (lado) { return area ** 2; }"
*/

areaQuadrado.length; // Número de parêmetro -> 1

/**
 * Elementos do DOM
 * -----------------------------------------
 * 
 * Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
 */
<a class="btn"> Click </a>

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe 'azul'.
btn.innerText; // Click
btn.addEventListener("click", () => {
    console.log("Clicou");
})

/**
 * Exercícios
 * 
 */

// nomeie 3 propriedades ou métodos de strings
var nome = "saulo";

nome.length;
nome.toLowerCase();
nome.replace("a", 'aaaaaaaaaa');

// nomeie 5 propriedades ou métodos de elementos do DOM
document.addEventListener();
document.getElementById();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
