/*
  . Singleton:
  
  - O singleton só pode ser instânciado uma única vez;
  - Possui um único ponto global de acesso;
  - Mais díficil de fazer testes unitários, pois possui depências ocultas;
  - atraso na inicialização: exige algumas informações que podem
    não estar disponíveis durante o tempo de inicialização;
  - Uma vez instânciada quase nunca é resetada;
  - Caso de uso: Util class, Ajax handler...
*/

var mySingleton = (function () {
 
 // instância e armazena uma referência ao Singleton
  var instance;
 
  function init() {

    // Singleton

    // métodos e variáveis privadas
    function privateMethod(){
      console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
    return {
      // métodos públicos e variáveis
      publicMethod: function() {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
    // obter a instância de Singleton,
    // se não existir cria a instância
    getInstance: function() {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
 
 /*

-Análise do Código:

Temos o acesso global à instância
através do mySingleton.getInstance();

 */
