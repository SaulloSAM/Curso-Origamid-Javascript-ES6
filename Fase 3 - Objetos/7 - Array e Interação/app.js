/**
 * [ARRAYS.FOREACH()]
 * 
 * [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array.
 * Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
 */
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach( function(item, index, array) {
  console.log(item.toUpperCase());
});

/**
 * [ARROW-FUNCTION]
 */
const li = document.querySelectorAll('li');

// São iguais.
li.forEach(i => i.classList.add('ativa'));
li.forEach(function(item) { item.classList.add('ativa'); });

/**
 * [MODIFICAR-A-ARRAY-ORIGINAL]
 * 
 * O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
 */
carros.forEach((item, index, array) => { array[index] = 'Carro ' + item; });
console.log(carros);

/**
 * [ARRAY.MAP()]
 * 
 * [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined,
 * retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
 */
const newCarros = carros.map((item) => {
  return 'Carro ' + item;
});

console.log(carros);
console.log(newCarros);

/**
 * [VALOR-RETORNADO]
 * 
 * Se não retornarmos nenhum valor durante a iteração utilizando map, 
 * o valor retornado como de qualquer função que não possui o return, será undefined.
 */
const newCarros2 = carros.map((item) => { const novoValor = 'Carro ' + item; });
console.log(newCarros2); // [undefined, undefined, undefined];

/**
 * [ARROW-FUNCTION] e [ARRAY.MAP()]
 * 
 * Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
 */
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);
console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];