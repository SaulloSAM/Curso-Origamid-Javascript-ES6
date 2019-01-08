// Exercícios

// Crie uma função construtora de Pessoas deve conter nome, sobrenome e idade.
// Crie um método no protótipo que retorne o nome completo da pessoa,
function Pessoa (nome = null, sobrenome = null, idade = 0) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.getFullName = function () { return `${this.nome} ${this.sobrenome}`; }

const p = new Pessoa ("Saulo", "Sinesio", 24);
console.log(p.getFullName());

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document.
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const $li = document.querySelector('li');

console.log($li.constructor.name);              // HTMLLIElement.
console.log($li.click.constructor.name);        // Function.
console.log($li.innerText.constructor.name);    // String.
console.log($li.value.constructor.name);        // Number.
console.log($li.hidden.constructor.name);       // Boolean.
console.log($li.offsetLeft.constructor.name);   // Number.
console.log($li.click());                       // undefined.

// Qual o construtor do dado abaixo:
console.log($li.hidden.constructor.name);       // - Boolean.