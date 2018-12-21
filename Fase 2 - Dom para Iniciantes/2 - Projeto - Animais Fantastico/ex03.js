/**
 * classList
 * ---
 * 
 * Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
 */
const menu = document.querySelector('.menu');

menu.className; // String, nome da classe.
menu.classList; // Lista de classes.
menu.classList.add('ativo'); // Adicionando uma classe.
menu.classList.add('ativo', 'mobile'); // Adicionando duas classes.
menu.classList.remove('ativo'); // Removendo uma classe.
menu.classList.toggle('ativo'); // Adiciona ou Remove uma classe.
menu.classList.contains('ativo'); // True ou False.
menu.classList.replace('ativo', 'inativo'); // Trocar classe por classe.

/**
 * attributes
 * ---
 * 
 * Retorna uma array-like com os atributos do elemento.
 * 
 * [getAttribute] e [setAttribute]
 * Métodos que retornam ou definem de acordo com o atributo selecionado.
 */
const animais = document.querySelector('.animais');
animais.attributes; // Retorna todos os atributos.
animais.attributes[0]; // Retorna o primeiro atributo.
animais.attributes['data-texto']; // Retorna o atributo data-texto.

const img = document.querySelector('img');

img.getAttribute('src'); // Retorna o valor do atributo src da imagem.
img.setAttribute('alt', 'Texto Alternativo'); // Muda ou adiciona o valor para o 'alt' da imagem
img.hasAttribute('id'); // Verifica se possui o atributo is. Retorna true ou false.
img.removeAttribute('alt'); // Remover o atributo do elemento.
//img.hasAttribute(); // Passando vazio, ele irá retornar true ou false se existir ou não pelo menos 1 atributo.

/**
 * Read Only vs Writable
 * ---
 * 
 * Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.
 * Lembre-se que podemos modificar o valor de uma propriedade [objeto.propriedade = '';]
 */
const animal = document.querySelector('.animais');
animal.className; // string com o nome das classes
animal.className = 'azul'; // substitui completamente a string
animal.className += ' vermelho'; // adiciona vermelho à string

// animal.attributes = 'class="ativo"'; // não funciona, read-only

/**
 * Exercício
 */

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach (item => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach (item => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const isAlt = document.querySelectorAll('img');
isAlt.forEach(el => console.log(`A imagem ${el.getAttribute('src')} possui a tag alt? ${el.hasAttribute('alt') ? "Sim" : "Não"}`));

// Modifique o href do link externo no menu
const href = document.querySelector('[href^="http"]');
console.log(href.setAttribute("href", "#outroLink"));
