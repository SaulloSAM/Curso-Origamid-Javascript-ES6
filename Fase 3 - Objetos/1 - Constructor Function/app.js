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