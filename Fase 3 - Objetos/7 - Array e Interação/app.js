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

/**
 * [ARRAY.MAP()] e [COM-OBJETOS] 
 * 
 * Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.
 */
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];
const tempoAulas = aulas.map(aula => aula.min);

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);

console.log(nomesAulas);
console.log(tempoAulas);

/**
 * [ARRAY.REDUCE()]
 * 
 * [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array.
 * Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
 */
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => { return acumulador + atual; });
console.log(total1);

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
console.log(total2);

// Maior valor
const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros2.reduce((anterior, atual) => { return anterior < atual ? atual : anterior; });
console.log(maiorValor);

/**
 * [ARRAY.REDUCERIGHT()]
 * 
 * Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, 
 * enquanto o reduce itera da esquerda para a direita.
 */
const frutas5 = ['Banana', 'Pêra', 'Uva'];
const frutasRight = frutas5.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas5.reduce((acc, fruta) => acc + ' ' + fruta);
console.log(frutas5);
console.log(frutasRight);
console.log(frutasLeft);

/**
 * [ARRAY.SOME()]
 * 
 * [].some(), se pelo menos um return da iteração for truthy, ele retorna true.
 */
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => { return fruta === 'Uva'; });
console.log(temUva); 

function maiorQue100(numero) { return numero > 100; }
const numeros6 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros6.some(maiorQue100);
console.log(temMaior);

/**
 * [ARRAY.EVERY()]
 * 
 * [].every(), se todos os returns das iterações forem truthy, o método irá retornar true.
 * Se pelo menos um for falsy, ele irá retornar false.
 */
const frutas9 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas9.every((fruta) => { return fruta; });
console.log(arraysCheias);

const numeros11 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros11.every(x => x > 3);
console.log(maiorQue3);

/**
 * [ARRAY.FIND()] e [ARRAY.FINDINDEX()]
 * 
 * [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
 * Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
 */
const frutas0 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas0.findIndex((fruta) => { return fruta === 'Uva'; });
console.log(buscaUva);

const numeros12 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros12.find(x => x > 45);
console.log(buscaMaior45);

/**
 * [ARRAY.FILTER()]
 * 
 * [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
 */
const frutas13 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas13.filter((fruta) => { return fruta; });
console.log(arrayLimpa);

const numeros9 = [6, 43, 22, 88, 101, 29];
const buscaMaior_45 = numeros9.filter(x => x > 45);
console.log(buscaMaior_45);