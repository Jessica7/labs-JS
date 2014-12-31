/******************************************
    Bugs em versões inferiores ao IE9
****************************************/
/*
#1 Em versões inferiores ao IE9, expressão de função nomeada
é tratada como declarações de função:Já que sabemos que
as declarações de funções são carregadas antes de qualquer código.
*/

// IE :(
typeof teste;
var j = function teste(){};// "function"

// chrome 
typeof teste;
var j = function teste(){} // "undefined"

//---------------------------------------------------------

/*
#2 - cria dois objetos diferentes:
*/
var labs =  function teste(){};
console.log(labs === teste); // false
labs.nome = "jessica";
console.log(labs.nome);// jessica
console.log(teste.nome); //undefined

/*

Vemos que o IE cria dois objetos distintos labs e teste,
é como tivéssemos criado dois objetos de funções separados.

-Análise do código:

armazenamos algo na propriedade(nome)do objeto labs,
porém tento acessar a propriedade nome através do objeto teste,
o código irá me retornar undefined, pois labs e teste são objetos
completamente diferentes. É assim que o IE faz a distinção entre ambos objetos.

*/

//------------------------------------------------------------

// #3- vazamento de escopo
/*
De acordo com ECMAScript as expressões de função nomeadas
devem está disponível apenas no âmbito interno,
mas o "fofo :(" do IE torna a função disponível
no escopo externo.veja só:
*/

var f = function g(){};
typeof g; // "function" | IE 

var f = function g(){};
typeof g; // "undefined" | chrome


