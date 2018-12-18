/**
 * Boolean
 * Existem dois valores booleanos false ou true.
 */
var valueBoolean = true;
var valueBoolean = false;

/**
 * Condicionais If e Else
 * Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
 * 
 * O valor dentro dos parênteses sempre será avaliado em true ou false.
 */
var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log("Possui Graduação");
} else {
    console.log("Não possui graduação");
}

var possuiDoutorado = true;
var possuiGraduacao = true;

if (possuiDoutorado) {
    console.log("Possui Doutorado");
} else if (possuiGraduacao) {
    console.log("Possui Graduação");
} else {
    console.log("Não possui graduação");
}

var nome = "";

if (nome) {
    console.log(nome);
} else {
    console.log("Não existe nome");
}

/**
 * Truthy e Falsy
 * 
 * Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
 */
if (false) {};
if (0) {};
if (-0) {};
if (NaN) {};
if (null) {};
if (undefined) {};
if ("") {};
if ('') {};

// O restante retorna true.
if (true) {};
if (1) {};
if (" ") {};
if ('saulo') {};
if (-5) {};
if ({}) {};

/**
 * Operador Lógico de negação !
 *  
 * O operador !, nega uma operação booleana. Ou seja !true é igual a false.
 * 
 * Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy
 */
if (!true) {};      // false
if (!1) {};         // false
if (!" ") {};       // false
if (!undefined) {}; // true
if (!!-5) {};       // false
if (!!'') {};       // false

/**
 * Operadores de conparação;
 * 
 * Vão sempre retornar um valor booleano.
 */

 if (10 > 5) {}      // true
 if (5 > 10) {}      // false
 if (20 < 10) {}     // true
 if (10 <= 10) {}    // true
 if (10 >= 11) {}    // false

 /**
  * Operadores de comparação
  * 
  * O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja,
  * o tipo de dado deve ser o mesmo quando usamos ===.
  */
 10 == "10";    // true
 10 == 10;      // true
 10 === "10";   // false
 10 === 10;     // false
 10 != 15;      // true
 10 != "10";    // false
 10 !== "10";   // true

 /**
  * Operadores Lógicos &&
  * 
  * && Compara se uma expressão e a outra é verdadeira.
  * 
  * Se ambos os valores forem true, ele irá retornar o valor verificado.
  * Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.
  */
true && true;           // true
true && false;          // false
false && true;          // false
"gato" && "cão";        // cão
(5 - 5) && (5 + 5);     // 0
"gato" && false;        // false
(5 >= 5) && (3 < 6);    // true

/**
 * Operadores Lógicos ||
 * 
 * || Compara se uma expressão ou outra é verdadeira.
 * 
 * Retorna o primeiro valor true que encontar
 */
true || true;           // true
true || false;          // true
false || true;          // true
"gato" || "cão";        // gato
(5 - 5) || (5 + 5);     // 10
"gato" || false;        // gato
(5 >= 5) || (3 < 6);    // true

/**
 * Switch
 * 
 * Com o switch você pode verificar se uma variável é igual à diferentes valores
 * utilizando o 'case'. Caso ela seja igual, você pode fazer algumas coisas que utiliza a
 * palavra chave 'break' para cancelar a continuação. O valor de 'default' ocorrerá caso
 * nenhuma das anteriores seja verdadeira.
 */
var corFavorita = "Azul";

switch (corFavorita) {
    case "Azul":
        console.log(corFavorita);
        break;
    case "Vermelho":
        console.log(corFavorita);
        break;
    case "Amarelo":
        console.log(corFavorita);
        break;
    default:
        console.log("Não tem cor favorita");
}

/**
 * Exercício
 */

// Verifique se a sua idade é maior do que a de algum parente.
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24;
var idadeIrmao = 22;
if (minhaIdade > idadeIrmao) {
    console.log("É maior");
} else if (minhaIdade == idadeIrmao) {
    console.log("É igual");
} else {
    console.log("É menor");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) ; // 3;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // cão
} else {
  console.log('Falso');
}