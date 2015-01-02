/*
  Module Pattern
  -Melhora a redução de variáveis privadas no escopo global
  -Renomeie funções públicas sem alterar o corpo da função.
  -utilizado em vários projetos: jQuery, Dojo, ExtJS, YUI
  -localiza funções e variáveis por meio de closurs
  -Altera membros público para o privado, ou vice-versa, modificando uma única linha
  - métodos privados são  inacessíveis
*/
//exemplo básico:
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