/**************************
      Tipos de Funções
***************************/

/*
  . Função Declarativa

  -funções declarativas são carregadas
  antes de qualquer código, isto
  porque a declaração é elevada ao topo
  do escopo acontecendo o famoso "Hoisting".
*/

function cash(){
  return 7;
}
 
/*
  Expressões de funções:
  . anônima
  . nomeada
  . auto-executável
*/

// . anônima
var sayHi = function(){
   console.log('hi');
}

// . nomeada
var speak = function hello(){
  console.log('bye');
}

// . auto-executável
(function hi(){
  //..
})();

/*
  Visibilidade de Escopo
*/

//. função declarativa

cash();// ocorreu o Hoisting

function cash(){
  return 7;
}

// . nomeada
var speak = function hello(){
  console.log('bye!');
}

 hello();// Erro! está fora do escopo - execeção para o IE

// . anônima
sayHi();// Erro , ainda não foi definida

var sayHi = function(){
  console.log('hi');
}
