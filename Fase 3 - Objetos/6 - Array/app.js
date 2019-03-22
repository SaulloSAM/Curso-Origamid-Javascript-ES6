/**
 * [ARRAYS]
 * 
 * Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
 */
const instrumentos1  = ['Guitarra', 'Baixo', 'Violão'];
const precos1        = [49, 99, 69, 89];
const dados1         = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

console.log(dados1);
console.log(`Dados - ${dados1[2]('Ford')}`);
console.log(`Dados - ${dados1[1][2].cor}`);

/**
 * [CONSTRUÇÃO-DE-ARRAYS]
 * 
 * Toda array herda os métodos e propriedades do protótipo do construtor Array.
 * 
 * Os valores das array's não são estáticos.
 */
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros2       = new Array('Corola', 'Mustang', 'Honda');

console.log(`Construção de Array - ${carros2[1]}`);
console.log(`Construção de Array - ${carros2[2] = 'Ferrari'}`);
console.log(`Construção de Array - ${carros2[10] = 'Parati'}`);
console.log(`Construção de Array - ${carros2.length}`);

/**
 * [ARRAY.FROM()]
 * 
 * Array.from() é um método utilizado para transformar array-like objects, em uma array.
 */
let li1  = document.querySelectorAll('li'); // NodeList
li1      = Array.from(li1); // Array

const carros3 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray3 = Array.from(carros3);
console.log(carrosArray3);

/**
 * [ARRAY.ISARRAY()]
 * 
 * Verifica se o valor passado é uma array e retorna um valor booleano.
 */
let li2 = document.querySelectorAll('li'); // NodeList
console.log(`isArray - ${Array.isArray(li2)}`); // false

li2 = Array.from(li2); // Array
console.log(`isArray - ${Array.isArray(li2)}`); // true

/**
 * [ARRAY.OF()] , [ARRAY()] E [NEW-ARRAY()]
 * 
 * Verifica se o valor passado é uma array e retorna um valor booleano.
 * A palavra chave new não é necessária para utilizar o construtor Array.
 */
console.log(`Array.of() - ${Array.of(10)}`);        // [10]
console.log(`Array.of() - ${Array.of(1,2,3,4)}`);   // [1,2,3,4]
console.log(`bew Array() - ${new Array(5)}`);       // [,,,,]
console.log(`Array() - ${Array(5)}`);               // [,,,,]
console.log(`Array() - ${Array(1,2,3,4)}`);         // [1,2,3,4]

/**
 * [PROPRIEDADES-E-MÉTODOS-DO-PROTOTYPE]
 * 
 * [].length retorna o tamanho da array.
 */
const frutas1 = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas1);
console.log(`Array() Length ${frutas1.length}`);
console.log(`Array[] Length ${frutas1[0].length}`);
console.log(`Array[] Length ${frutas1[1].length}`);
console.log(`Array[]() Length ${frutas1[2].length}`);

/**
 * [MÉTODOS-MODIFICADORES] [Arr.SORT()]
 * 
 * Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods).
 * Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.
 */
const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos3.sort();
console.log(`SORT - ${instrumentos3}`);

const idades3 = [32,21,33,43,1,12,8];
idades3.sort();
console.log(`SORT - ${idades3}`);

/**
 * [arr.UNSHIFT()] , [arr.PUSH()]
 * 
 * [].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
 * [].push() adiciona elementos ao final da array e retorna o length da mesma.
 */
const carros4 = ['Ford', 'Fiat', 'VW'];
carros4.unshift('Honda', 'Kia'); // 5
console.log(`UNSHIFT - ${carros4}`); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros4.push('Ferrari'); // 6
console.log(`PUSH - ${carros4}`); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

/**
 * [arr.SHIFT()] , [arr.POP()]
 * 
 * [].shift() remove o primeiro elemento da array e retorna o mesmo.
 * [].pop() remove o último elemento da array e retorna o mesmo.
 */
const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros5.shift();  // 'Ford'
console.log(`SHIFT - ${carros5}`);      // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros5.pop();  // 'Honda'
console.log(`POP - ${carros5}`);    // ['Fiat', 'VW'];

/**
 * [ARRAY.REVERSE()]
 * 
 * [].reverse() inverte os itens da array e retorna a nova array.
 */
const carros6 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(`REVERSE - ${carros6.reverse()}`);

/**
 * [ARRAY.SPLICE()]
 * 
 * [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index.
 * Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
 */
const carros7 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros7.splice(1, 0, 'Kia', 'Mustang');
console.log(`SPLICE - ${carros7}`);

carros7.splice(3, 2, 'Ferrari');
console.log(`SPLICE - ${carros7}`);

/**
 * [ARRAY.COPYWITHIN()]
 * 
 * [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. 
 * Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
 */
console.log("COPYWITHIN");
console.log(['Item1', 'Item2', 'Item3', 'Item4']);
console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3));
console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));

/**
 * [ARRAY.FILL()]
 * 
 * [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
 */
console.log("FILL");
console.log(['Item1', 'Item2', 'Item3', 'Item4']);
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'));
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2));
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3));

/**
 * [MÉTODOS-DE-ACESSO] [arr.CONCAT()]
 * 
 * Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
 */
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(`Concat - ${transportes}`);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(`Concat - ${maisTransportes}`);

/**
 * [arr.INCLUDES()] , [arr.INDEXOF()] e [arr.LASTINDEXOF()]
 * 
 * [].includes(valor) verifica se a array possui o valor e retorna true ou false.
 * [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
 * Já o [].lastIndexOf(valor) retorna o index do último.
 */
const linguagens1 = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens1);
console.log(`INCLUDES - ${linguagens1.includes('css')}`);
console.log(`INCLUDES - ${linguagens1.includes('ruby')}`);
console.log(`INDEXOF - ${linguagens1.indexOf('python')}`);
console.log(`INDEXOF - ${linguagens1.indexOf('js')}`);
console.log(`LASTINDEXOF - ${linguagens1.lastIndexOf('js')}`);

/**
 * [ARRAY.JOIN()]
 * 
 * [].join(separador) junta todos os valores da array e retorna uma string com eles.
 * Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
 */
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens2);
console.log(`JOIN - ${linguagens2.join()}`);
console.log(`JOIN - ${linguagens2.join(' ')}`);
console.log(`JOIN - ${linguagens2.join('-_-')}`);

let htmlString1 = '<h2>Título Principal</h2>'
console.log(`SPLIT - ${htmlString1 = htmlString1.split('h2')}`);
console.log(`JOIN - ${htmlString1 = htmlString1.join('h1')}`);

/**
 * [ARRAY.SLICE()]
 * 
 * [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
 */
const linguagens5 = ['html', 'css', 'js', 'php', 'python'];
console.log(`SLICE - ${linguagens5.slice(3)}`);
console.log(`SLICE - ${linguagens5.slice(1, 4)}`);

const cloneLinguagens = linguagens5.slice();
console.log(`SLICE - ${cloneLinguagens.slice()}`);

// --------------------------------------------------
console.log('EXERCÍCIOS');

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);
// Remova o primeiro valor de comidas e coloque em uma variável
const comidaPrimeira = comidas.shift();
console.log(comidaPrimeira);
// Remova o último valor de comidas e coloque em uma variável
const comidaUltima = comidas.pop();
console.log(comidaUltima);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe");
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));


let html = `<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();
carros.pop();
console.log(carros);
console.log(carrosCopia);