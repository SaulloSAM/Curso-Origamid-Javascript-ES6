/**
 * [ADDEVENTLISTENER]
 * 
 * Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
 */
const img = document.querySelector('img');

// Elemento.addEventListener(event, callback, options). O terceiro parâmetro é opcional.
img.addEventListener('click', () => { console.log('Clicou'); });

/**
 * [CALLBACK]
 * 
 * É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.
 */
function callback () {
  console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀

img.addEventListener('click', callback()); // undefined

/**
 * [EVENT]
 * 
 * O primeiro parâmetro do callback é referente ao evento que ocorreu.
 * Geralmente utilizam 'e' como nome do parâmetro.
 */
function callback2(event) {
    console.log(event);
}
  
img.addEventListener('click', callback2);

/**
 * [PROPRIEDADES-DO-EVENT]
 */
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

/**
 * [EVENT.PREVENTDEFAULT()]
 * 
 * Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
 */
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

/**
 * [THIS]
 * 
 * A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. 
 * No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
 */
function callback3 () {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback3);

/**
 * [DIFERENTES-EVENTOS]
 * 
 * Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais.
 * Eventos podem ser adicionados a diferentes elementos, como o window e document também.
 */
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

/**
 * [KEYBOARD]
 * 
 * Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
 */
function handleKeyboard(event) {
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);

/**
 * [FOREACH-E-EVENTOS]
 * 
 * O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
 */
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => { img.addEventListener('click', imgSrc); });

/**
 * Exercícios
 */
// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const link = document.querySelectorAll('a[href^="#"]');

function eventLinkInterno (e) {
    // Previnindo o Evento padrão de click em links.
    e.preventDefault();

    // Removendo todos as Classes Ativo.
    link.forEach(a => a.classList.remove('ativo'));

    // Adivionando a classe ativo apenas no item clicado.
    e.target.classList.add('ativo');

    console.log("Ex 01 - Ativado");
}

link.forEach (a => a.addEventListener('click', eventLinkInterno));


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElement = document.querySelectorAll('body *');

function isElement (e) {
    console.log("Ex 02", e.target);
}

allElement.forEach (e => e.addEventListener('click', isElement));


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElement (e) {
    e.currentTarget.remove();
}

allElement.forEach (e => e.addEventListener('click', removeElement));

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function clickT (e) {
    if (e.key === "t" || e.key === "T") {
        const html = document.querySelector('html');
        html.classList.toggle("textoMaior");
    }

    console.log(e)
}

window.addEventListener('keydown', clickT);
