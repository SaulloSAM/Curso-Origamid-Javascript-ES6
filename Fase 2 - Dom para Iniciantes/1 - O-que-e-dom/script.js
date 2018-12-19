/**
 * DOCUMENT OBJECT MODEL (DOM)
 * ---
 * 
 * É uma interface que representa documentos HTML e XML através de objetos.
 * Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
 * 
 * Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.
 */
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
console.log(`Altura do navegador = ${window.innerHeight}`);

// DOM

/*
window
|__location
|__documet
|__html
    |__head
    |__body
        |__h1
        |__section
            |__h2
            |__p
*/

/**
 * Window e Document
 * ---
 * 
 * São os objetos principais do DOM, boa parte de manipulação é feita através
 * dos seus métodos e propriedades.
 * 
 * window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
 */
window.alert("Isso é um alerta");
alert("Isso também é um alerta");

console.log(document.body); // Retorna o body.
console.log(document.querySelector("p")); // Seleciona o primeiro elemento "p".

/**
 * Node
 * ---
 * 
 * Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades.
 * Element é um tipo de objeto Node.
 */
const titulo = document.querySelector("p");
console.log(`Retorno Título - ${titulo.innerText}`);
console.log(`Retorno Altura - ${titulo.offsetHeight}`);
console.log(`Retorno ID - ${titulo.id}`);
console.log(`Retorno Classes`, titulo.classList);

// Ativa a função ao sofrer um evento de "click".
titulo.addEventListener("click", () => {
    console.log("Você clicou no título da página.")
});

/**
 * Exercícios
 * ---
 */
// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que possua a classe ativo
let ativo = document.querySelector(".ativo");

if (ativo)  console.log(ativo);
else        console.log("Não possui nenhuma class .ativo no elemento DOM");

// Retorne a linguagem do navegador
console.log(window.navigator.language);

// Retorne a largura da janela
console.log(`Largura: ${window.innerWidth}`);
