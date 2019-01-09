/**
 * [STRING]
 * 
 * É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
 */
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

/**
 * [str.length]
 * 
 * Propriedade com o total de caracteres da string.
 */
const frase = 'A melhor comida';

console.log(`Quantidade de caracteres de ${comida} - ${comida.length}`);
console.log(`Quantidade de caracteres de ${frase} - ${frase.length}`);

console.log(`Primeiro caracter de ${comida} - ${comida[0]}`);
console.log(`Primeiro caracter de ${frase} - ${frase[0]}`);
console.log(`Ultimo Caracter de "${frase}" - ${frase[frase.length - 1]}`);

/**
 * [str.charAt(n)]
 * 
 * Retorna o caracter de acordo com o index de (n).
 */
const linguagem = 'JavaScript';
console.log(`Usando charAt() - ${linguagem.charAt(0)}`); // J
console.log(`Usando charAt() - ${linguagem.charAt(2)}`); // v
console.log(`Usando charAt() - ${linguagem.charAt(linguagem.length - 1)}`); // t

/**
 * [str.concat(str2,str3,...)]
 * 
 * Concatena as strings e retorna o resultado.
 */
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';
const fraseCompleta = frase2.concat(linguagem2, '!!');
console.log(`Frase Completa - ${fraseCompleta}`);

/**
 * [str.includes(search,position)]
 * 
 * Procura pela string exata dentro de outra string. A procura é case sensitive.
 */
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';
console.log(`Possui a fruta - ${listaFrutas.includes(fruta)}`);
console.log(`Possui a fruta - ${fruta.includes(listaFrutas)}`);

/**
 * [str.endsWith(search)] e [str.startsWith(search)]
 * 
 * Procura pela string exata dentro de outra string. A procura é case sensitive.
 */
console.log(`endWith - ${fruta.endsWith('nana')}`);
console.log(`startsWith - ${fruta.startsWith('Ba')}`);
console.log(`startsWith - ${fruta.startsWith('na')}`);
