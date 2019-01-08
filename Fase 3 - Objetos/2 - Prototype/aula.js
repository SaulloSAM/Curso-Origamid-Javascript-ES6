/**
 * [PROTOTYPE]
 * 
 * A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
 */
function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

let andre = new Pessoa('André', 28);
  
console.log(andre.prototype); // undefined.
console.log(Pessoa.prototype); // retorna o objeto.

/**
 * [FUNCAO.PROTOTYPE]
 * 
 * É possível adicionar novas propriedades e métodos ao objeto prototype.
 */
Pessoa.prototype.andar = function () { return this.nome + ' andou'; }
Pessoa.prototype.nadar = function () { return this.nome + ' nadou'; }

console.log(`Add - andar() e nadar()`);
console.log(Pessoa.prototype); // retorna o objeto.

// ACESSO AO PROTÓTIPO
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor.
// Lembrando, prototype é uma propriedade de funções apenas.

/**
 * [PROTO]
 * 
 * O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__.
 * É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
 */
saulo = new Pessoa('Saulo', 24);
console.log(saulo.andar());
console.log(saulo.__proto__.andar());

// HERANÇA DE PROTÓTIPO
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto.
// O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

/**
 * [CONSTRUTORES-NATIVOS]
 * 
 * Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores.
 * Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
 */
const pais = 'Brasil';
const cidade = new String('Rio');

console.log(`Primeira letra de ${pais} - ${pais.charAt(0)}`); // B
console.log(`Primeira letra de ${cidade} - ${cidade.charAt(0)}`); // R
console.log(String.prototype);

// É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
const lista = document.querySelectorAll('li');
// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
