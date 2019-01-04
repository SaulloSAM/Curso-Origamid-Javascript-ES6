/**
 * [OUTERHTML], [INNERHTML] E [INNERTEXT]
 * 
 * Propriedades que retornam uma string contendo o html ou texto.
 * É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
 */
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


/**
 * [TRANSVERSING]
 * 
 * Como navegar pelo DOM, utilizando suas propriedades e métodos.
 */
const lista = document.querySelector('.animais-lista');

console.log(`pai ${ lista.parentElement }`);
console.log(`pai do pai ${ lista.parentElement.parentElement }`);
console.log(`elemento acima ${ lista.previousElementSibling }`);
console.log(`elemento abaixo ${ lista.nextElementSibling }`);

console.log(`HTMLCollection com os filhos ${ lista.children }`);
console.log(`primeiro filho ${ lista.children[0] }`);
console.log(`último filho ${ lista.children[--lista.children.length] }`);

console.log(`todas as LI's ${ lista.querySelectorAll('li') }`);
console.log(`último filho ${ lista.querySelector('li:last-child') }`);

/**
 * [ELEMENT] VS [NODE]
 * 
 * Element's represetam um elemento html, ou seja, uma tag.
 * Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
 */
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

/**
 * [MANIPULANDO-ELEMENTOS]
 * 
 * É possível mover elementos no dom com métodos de Node.
 */
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

/**
 * [NOVOS-ELEMENTOS]
 * 
 * Podemos criar novos elementos com o método createElement()
 */
const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');
animais.appendChild(novoH1);

/**
 * [CLONAR-ELEMENTOS]
 * 
 * Todo elemento selecionado é único.
 * Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
 */
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais.

const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

// true sinaliza para incluir os filhos

/**
 * Exercícios
 */
// Duplique o menu e adicione ele em copy
const exMenu = document.querySelector('.menu');
const exCopy = document.querySelector('.copy');
const cloneExMenu = exMenu.cloneNode(true);
exCopy.appendChild(cloneExMenu);

// Selecione o primeiro DT da dl de Faq
const exFaq = document.querySelector('.faq');
const exDt = exFaq.querySelector('dt');
console.log(exDt);

// Selecione o DD referente ao primeiro DT
const exDD = exDt.nextElementSibling;
console.log(exDD);


// Substitua o conteúdo html de .faq pelo de .animais
const exAnimais = document.querySelector('.animais');
exFaq.innerHTML = exAnimais.innerHTML;