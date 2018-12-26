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