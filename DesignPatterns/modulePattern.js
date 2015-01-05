/*
  . Module Pattern
  -Reduz variáveis privadas no escopo global
  -Renomeia funções públicas sem alterar o corpo da função.
  -localiza funções e variáveis por meio de closures
  -Altera membros público para o privado, ou vice-versa, modificando uma única linha
  - étodos privados são  inacessíveis.
  -utilizado em vários projetos: jQuery, Dojo, ExtJS, YUI

  exemplo básico:

  Criamos uma função anônima com ()  IIFE e declaramos métodos internamente, esses
  métodos estão privados, caso queira torná-los públicos colocaremos
  no return da função.

*/

var Module = (function(){

  var privateMethod = function(){
    console.log("variável privada!");
  };

  return {
    publicMethodOne : function(){
      console.log('método privado');
    },
    publicMethodTwo : function(){
      //..
    },
     publicMethodTree : function(){
      //..
    }
  };

}());

Module.publicMethodOne();

//-----------------------------------------------------------

/* 
-Revealing Module Pattern

Essa técnica onde retorno uma interface pública à
partir de um módulo é chamada de Revealing Module Pattern.

*/

var Module = (function () {
  //privado
  var privateMethod = function () {
    
  };
  //público
  var someMethod = function (msg) {
    console.log(msg);
  };
  
  return {
    someMethod    : someMethod
  };

})();


Module.someMethod('hello');

//- Aumentando o módulo
var Module = (function () {

  var privateMethod = function () {
    // private
  };
  var someMethod = function () {
    // public
  };
  var anotherMethod = function () {
    // public
  };
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();


// Segundo módulo

var ModuleTwo = (function (Module) {
    
  Module.extension = function () {
    // ...
  };
  
  return Module;
    
})(Module || {});

// Module || {} : caso não exista o módulo instância um módulo evitando erro!