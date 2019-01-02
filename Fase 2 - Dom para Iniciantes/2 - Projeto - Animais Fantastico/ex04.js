/**
 * Dimensões e Distâncias
 * ---
 * 
 * [HEIGHT] E [WIDTH]
 * Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
 */
const section = document.querySelector('.animais');

console.log(`height + padding = ${section.clientHeight}`);
console.log(`height + padding + border = ${section.offsetHeight}`);
console.log(`height total, mesmo dentro de scroll = ${section.scrollHeight}`);
// Mesma coisa para o Width, clientWidth ...

/**
 * [OFFSETTOP] E [OFFSETLEFT]
 */
console.log(`Distância entre o topo do elemento e o topo da página = ${section.offsetTop}`);
console.log(`Distância entre o canto esquerdo do elemento e o canto esquerdo da página ${section.offsetLeft}`);

/**
 * [GETBOUNDINGCLIENTRECT()]
 * Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
 */
const rect = section.getBoundingClientRect();
console.log(`width do elemento = ${rect.width}`);
console.log(`height do elemento = ${rect.height}`);
console.log(`distância entre o topo do elemento e o scroll = ${rect.top}`);

/**
 * [window]
 */
console.log(`width do janela ${ window.innerWidth }`);
console.log(`soma dev tools também ${ window.outerWidth }`);
console.log(`height da janela ${ window.innerHeight }`);
console.log(`soma a barra de endereço ${ window.outerWidth }`);

console.log(`distância total do scroll horizontal ${ window.pageYOffset }`);
console.log(`distância total do scroll vertical ${ window.pageXOffset }`);

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

/**
 * [MATCHMEDIA()]
 * Utilize um media-querie como no CSS para verificar a largura do browser
 */
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

/**
 * Exercício
 */

// Verifique a distância da primeira imagem em relação ao topo da página.
window.onload = () => {
  const img = document.querySelector('img');
  console.log(`Ex 01 - ${img.offsetTop}`);
  
  // Retorne a soma da largura de todas as imagens.
  const allImg = document.querySelectorAll('img');
  let totalWidth = 0;
  
  allImg.forEach((element) => {
    totalWidth += element.offsetWidth;
  });
  
  console.log(`Ex 02 - ${totalWidth}`);
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google).
const allLink = document.querySelectorAll('a[href]');

allLink.forEach((element, index) => {
  if (element.offsetHeight >= 48 && element.offsetWidth >= 48) {
    console.log(`Ex 03 - Elemento ${index} - Possui o recomendado`);
  } else {
    console.log(`Ex 03 - Elemento ${index} - Não possui o recomendado`);
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu.
const menuMobile = window.matchMedia('(max-width: 720px)').matches;

if (menuMobile) {
  const menu = document.querySelector('.menu');
  menu.classList += " menu-mobile";
  console.log(`Ex 04 - Trocou`);
} else {
  console.log(`Ex 04 - Não trocou`);
}