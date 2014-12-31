/***************************
    Object.definePorperty
****************************/
/*
    .definir vs atribuir
    - adicionar propriedades a um objeto:

    . atribuir: É utilizado quando a intenção é atualizar
     o valor de uma propriedade, mas também utilizado para criar uma
     nova propriedade.

     . definir: É utilizado Object.defineProperty quando a intenção é criar uma nova 
     propriedade ou modificar uma definição existente.
     
    -DefineOwnProperty : verifica se a propriedade existe no objeto   
    -Object.defineProperty : define uma nova propriedade a um objeto        

    - problema:
    antes do ES5 só era possível adicionar proriedades a um objeto já existente era usado o
    operador de atribuição ( = ).

    ex:
    var obj = {
        a: 1,
        b: 2
    }

    obj.a = -1; 
    obj.c = 3;  
    obj.toString = function () { //add a method to obj
    var str = "{ ";
    for (var p in this) if (typeof this[p] != "function") str += p + ": " + this[p] + " ";
    return str+"}"
};
 
console.log(obj.toString());

- ES5 adicionou a capacidade de: 
 .criar propriedades somente de leitura
 .cria vários níveis de herança prototípica

por isso que os operadores de atribuição
se tornaram menos confiáveis para adicionar propriedades
a um objeto.

*/


//Exemplo Toolbar com defineProperty com prototype
var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName  = lastName;
  };

  Object.defineProperties( Person.prototype, {
    sayHi : {
      value : function() {
        return "Hello";
      },
      enumerable : true
    },
    fullName : {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      enumerable : true
    }
  });

  var keka = new Person("jessica","nascimento");
  console.log(keka.fullName); //Console "jessica nascimento"
  console.log(keka.sayHi());

