/**
 * Seleção de Elementos
 * ---
 * 
 * [ID]
 * 'getElementById' seleciona e retorna elementos do DOM pelo seu ID.
 * 
 * [Classe] e [Tag]
 * 'getElementsByClassName' e 'getElementsByTagName' selecionam e retornam uma lista de elementos do DOM.
 * A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
 *
 * [Seletor-Geral-Unico]
 * querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
 * 
 * [Seletor-Geral-Lista]
 * querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
 * 
 * [Array-Like]
 * HTMLCollection e NodeList são array-like, parecem uma array mas não são.
 * O método de Array forEach() por exemplo, existe apenas em NodeList.
 * 
 * É possível transformar array-like em uma Array real, utilizando o método Array.from(meuElemento)
 */
console.log("Exercício - 01");

// Retorne no console todas as imagens do site
const allImage = document.querySelectorAll("img");
console.log("Todas as Imagens do Site", allImage);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const allNameImage = document.querySelectorAll('[src^="img/imagem"]');
console.log("Todas as imagens do site que comece com 'imagem'", allNameImage);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log("Todos os links internos do Site", links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log("Primeiro Elemento h2 que tem está dentro do elemento de classe '.animais-descricao'\n", h2);

// Selecione o último p do site
const p = document.querySelectorAll("p");

console.log("Ultimo elemento 'p' do Site", p[--p.length]);