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

/**
 * [str.slice(start,end)]
 * 
 * Corta a string de acordo com os valores de start e end.
 */
const transacao1 = "Depósito do cliente";
const transacao2 = "Depósito do fornecedor";
const transacao3 = "Taxa de camisas";

console.log(`SLICE - T1 - ${transacao1.slice(0,3)}`);
console.log(`SLICE - T2 - ${transacao2.slice(0,3)}`);
console.log(`SLICE - T3 - ${transacao3.slice(0,3)}`);

console.log(`SLICE - T1 - ${transacao1.slice(12)}`);
console.log(`SLICE - T1 - ${transacao1.slice(-4)}`);
console.log(`SLICE - T1 - ${transacao1.slice(3,6)}`);

/**
 * [str.substring(start,end)]
 * 
 * Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
 */
const linguagem3 = "JavaScript";

console.log(`SUB - L3 - ${linguagem2.substring(3,5)}`);
console.log(`SUB - L3 - ${linguagem2.substring(0,4)}`);
console.log(`SUB - L3 - ${linguagem2.substring(4)}`);
console.log(`SUB - L3 - ${linguagem2.substring(-3)}`);

/**
 * [str.indexOf(search)] e [str.lastIndexOf(search)]
 * 
 * Retorn o index da string, assim que achar o primeiro resultado ele já retorna.
 * No caso do lastIndexOf ele retorna o último resultado.
 */
const instrumento = "Guitarra";

console.log(`I - ${instrumento.indexOf("r")}`);
console.log(`L - ${instrumento.lastIndexOf("r")}`);
console.log(`I - ${instrumento.indexOf("ta")}`);

/**
 * [str.padstart(search)] e [str.padend(search)]
 * 
 * Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. * O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
 */
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});

console.log(`S - ${listaPrecos[0].padStart(10, '.')}`);
console.log(`E - ${listaPrecos[0].padEnd(10, '.')}`);

/**
 * [str.repeat(n)]
 * 
 * Repete a string n vezes.
 */
const frase3 = "Ta";
console.log(`Repeat - ${frase3.repeat(10)}`);

/**
 * [str.replace(regexp/substr,newstr/function)]
 * 
 * Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar
 * apenas o primeiro valor que encontrar.
 */
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

/**
 * [str.split(padrao)]
 * 
 * Divide a string de acordo com o padrão passado e retorna uma array.
 * join é um método de Array.
 */
const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

/**
 * [str.tolowercase()] e [str.touppercase()]
 * 
 * Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
 */
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

/**
 * [str.trim()] e [str.trimstrar()] e [str.trimend()]
 * 
 * Remove espaço em branco do início ou final de uma string.
 */
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

console.log(`---------------------------------------------------------`);

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let soma = 0;

    transacoes.forEach(e => {
        soma += parceInt(e.valor.replace("R$ ", ""));
    });

  console.log("Soma = " + soma);
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  // Retorne o último caracter da frase
  const frase4 = 'Melhor do ano!';
  console.log(frase4[frase4.length - 1]);
  
  // Retorne o total de taxas
  const transacoes4 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];