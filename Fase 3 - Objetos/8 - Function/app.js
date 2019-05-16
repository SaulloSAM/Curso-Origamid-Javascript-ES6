/**
 * [FUNCTION]
 * 
 * Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.
 */
function areaQuadrado (lado) { return lado * lado; }
const perimetroQuadrado = new Function ("lado", "return lado * 4");
const lado = 2;
console.log(`Area: ${areaQuadrado(lado)}`);
console.log(`Perimetro: ${perimetroQuadrado(lado)}`);

/**
 * [PROPRIEDADES]
 * 
 * Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.
 */
function somar(n1, n2) { return n1 + n2; }
console.log(`Total Param: ${somar.length}`);  
console.log(`Nome Func: ${somar.name}`);

/**
 * [FUNCTION.CALL()]
 * 
 * function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
 */
const carro = {
    marca: 'Ford',
    ano: 2018
}
  
function descricaoCarro () {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro()            // undefined undefined
descricaoCarro.call()       // undefined undefined
descricaoCarro.call(carro)  // Ford 2018