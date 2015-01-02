/*
  Module Pattern
*/
//exemplo:
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