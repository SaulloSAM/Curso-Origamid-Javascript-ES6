/**
 * [OBJETOS]
 * 
 * Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}.
 * Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior?
 * É possível com o Object.create, mas veremos ele mais tarde.
 */
const carro = {
    marca: 'Marca',
    preco: 0,
}
console.log("Objeto BASE:", carro);

let honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;
console.log("Honda:", honda);

let fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;
console.log("Fiat", fiat);

console.log("Fiat aponta para Honda que aponta para Carro", carro, honda, fiat);

/**
 * [CONSTRUCTOR-FUNCTIONS]
 * 
 * Para isso existem as Constructor Functions, ou seja, 
 * Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
 */

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
console.log("Honda:", honda);

fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;
console.log("Fiat", fiat);
console.log("Agora ta certo!", new Carro(), honda, fiat);

/**
 * [PARÂMETROS] E [ARGUMENTOS]
 * 
 * Podemos passar argumentos que serão utilizados no momento da criação do objeto.
 */
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

honda = new Carro('Honda', 4000);
fiat = new Carro('Fiat', 3000);

/**
 * [THIS-KEYWORD]
 * 
 * O this faz referência ao próprio objeto construído com a Constructor Function.
 * 
 * Variáveis dentro da Constructor estão "protegidas".
 */
function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    
    this.marca = marca;
    this.preco = precoFinal;
}

honda = new Carro('Honda', 2000);


/**
 * [Exemplo-Real]
 * 
 * Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
 */
console.log("--------------------------------------");
function Dom (seletor) {
    this.element    =   () => { return document.querySelector(seletor); };
    this.ativar     =   (classe) => { this.element().classList.toggle(classe); }
}

// CONSTRUCTOR FUNCTION REAL
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

const li = new Dom('li');
li.ativar('ativo');

const last_li = new Dom('li:last-child');
last_li.ativar('ativo');

/**
 * Exercícios
 */
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() { console.log(this.nome + ' andou'); }
}

function Pessoa (nome) {
    this.idade = 0;
    andar = () => { console.log(`${nome} andou`)};
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa('João');
const pessoa2 = new Pessoa('Maria');
const pessoa3 = new Pessoa('Bruno');

pessoa1.idade = 20;
pessoa2.idade = 25;
pessoa3.idade = 15;

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function AllTypeElement (element) {
    this.elements        =   document.querySelectorAll(element);
    this.addClass        =   (classe) => { this.elements.forEach( (e) => { e.classList.add(classe); })};
    this.removeClass     =   (classe) => { this.elements.forEach( (e) => { e.classList.remove(classe); })};
}

const allLi = new AllTypeElement('li');