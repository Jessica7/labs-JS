/*

  .Namespaces
    o que é ?
  -É uma técnica utilizada para diminuir o número de variáveis globais
   evitando assim conflitos/colisões entre nomes, além de melhorar
   a organização e legibilidade do código.
   
   vamos aos exemplos:
*/

//[Sem Namespace] :(

//Estão no escopo global

// construtores
function Parent() {}
function Child() {}

//variável
var el = 1;

// objeto
var module1 = {};

//[Com Namespace]

// criamos um objeto global 
var MYAPP = {};

// construtores
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

MYAPP.some_var = 1;

// [Evitar sobescrita do Namespace]
// criaremos uma verificação se existe algum namespace

var MYAPP = {};

if (typeof MYAPP === "undefined") {
 var MYAPP = {};
}
// ou
var MYAPP = MYAPP || {};

// caso queira definir MYAPP.module.module2 
// terá que definir 3 verificações para cada objeto
// ou propriedade que está definido

// função reutilizável

// função namespace
MYAPP.namespace('MYAPP.modules.module2');

// equivale a isso
  var MYAPP = {
    modules: {
      module2: {}
    }
  };

//implementação da função namespace 
//caso exista namespace não será sobescrito

var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {
 var parts = ns_string.split('.'),
 parent = MYAPP,
 i;

 if (parts[0] === "MYAPP") {
 parts = parts.slice(1);
 }

 for (i = 0; i < parts.length; i += 1) {

  //criar uma propriedade caso não exista
   if (typeof parent[parts[i]] === "undefined") {
   parent[parts[i]] = {};
   }

 }
  return parent;
};


// atribui o valor retornado a uma variável local
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true
// pular inicial `MYAPP`
MYAPP.namespace('modules.module51');
// namespace longo
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');


//[Diferentes formas de declarar Namespace]

// VARIÁVEL GLOBAL

/*
  temos uma única variável global como objeto de referência,
  o retorno irá essa implementação irá retornar objetos com 
  funções e propriedades.Um grande problema com esse padrão
  é garantir que ninguém tenha usado o mesmo nome da variável global
*/
var myApplication =  (function(){
        function(){
            /*...*/
        },
        return{
            /*...*/
        }
})();

/*
há uma "pseudo-solução" para esse problema
utilizar namespace prefixo. Ex: myApplication_
existe inúmeras desvantagens: resulta em um grande
em um grande número de objetos globais, quando app aninhada
começar a crescer.
*/

var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod(){ /*..*/ }

//NOTAÇÃO LITERAL -OBJETO

/*
  a grande vantagem e de não poluir o espaço
  global e a organização do código.
  fornece uma base solidar para estender
  seu código

*/
var myApplication = {
    getInfo:function(){ /**/ },
    // we can also populate our object literal to support
    // further object literal namespaces containing anything
    // really:
    models : {},
    views : {
        pages : {}
    },
    collections : {}
};

// ou adicionar propriedades diretamente no namespace
myApplication.foo = function(){
    return "bar";
}
myApplication.utils = {
    toString:function(){
        /*..*/
    },
    export: function(){
        /*..*/
    }
}

// Há formas diferentes do objeto literal namespace
// como possuir o retorno, é utilizado para aplicações
// menores.
var namespace = (function () {
    // definido dentro do âmbito local
    var privateMethod1 = function () { /* ... */ }
    var privateMethod2 = function () { /* ... */ }
    var privateProperty1 = 'foobar';
    return {
        // retorno do objeto literal
       
        publicMethod1: privateMethod1,
        // namespace aninhado com propriedade pública
        properties:{
            publicProperty1: privateProperty1
        },
        //outro namespace testado
        utils:{
            publicMethod2: privateMethod2
        }
        ...
    }
})();


//NAMESPACE ANINHADOS (NESTED)
//menor risco de conflitos de nomes
//mesmo se um namespace existe

//exemplo:
YAHOO.util.Dom.getElementsByClassName('test');// utilizar o padrão namespace nested


var myApp =  myApp || {};
// verifica se exite alguma definição igual
// filhos
myApp.routers = myApp.routers || {};
myApp.model = myApp.model || {};
myApp.model.special = myApp.model.special || {};

// também com propriedades indexadas
myApp["routers"] = myApp["routers"] || {};
myApp["models"] = myApp["models"] || {};
myApp["controllers"] = myApp["controllers"] || {};


// IMMERDIATELY-INVOCKED FUNCTION EXPRESSIONS (IIFE)
/*
  É uma função sem nome e chamada depois de
  ter sido definida, todas funções e variáveis
  que que estão dentro desta função só poderão ser
  acessas internamente, estão privadas, encapuslando
  toa a lógica.
  poderá ser utilizada com namepspace com o objetivo
  de estender.

*/

var namespace = namespace || {};
// aqui o objeto namespace é pasado como uma função
// parâmetros que atribui método públicos e propriedades
(function( o ){
    o.foo = "foo";
    o.bar = function(){
        return "bar";
    };
})(namespace);
console.log(namespace);


//exemplo abaixo o namespace é passado com argumento
//para função anônima e é estendido com mais funcionalidades

// vamos estender o namespace com novas funcionalidades
(function( namespace, undefined ){
    // método público
    namespace.sayGoodbye = function(){
        console.log(namespace.foo);
        console.log(namespace.bar);
        speak('goodbye');
    }
})( window.namespace = window.namespace || {});

// NAMESPACE INJECTION
/*
    É uma variação da IIFE "injeta" métodos e propriedades de um namespace
    específico dentro um um wrapper(pacote) de função usando como um proxy
    namespace. benefício deste padrão é oferecer fácil aplicação  do comportamento
    de vários objetos e namespace, poderá ser útil para palicar métodos set e get
    futuramente.
    Desvantagens são: poderá existir abordagens mais fáceis para alcançar
    esse objetivo
*/

// Util - auxiliar na criação
//abaixo utilizaremos esse padrão para "preencher" dois namespaces
// o utils, e outro que criaremos dinamicamente p/ atribuir funcionalidades p/ utils
// isto é, um novo namespace chamado de tools.
var myApp = myApp || {};
myApp.utils =  {};
(function() {
    var val = 5;
    this.getValue = function() {
        return val;
    };
    this.setValue = function(newVal) {
        val = newVal;
    }
    // também introduzir um novo namespace
    this.tools = {};
}).apply(myApp.utils);
// "injeta" um novo comportamento o namespace ferramentas
// definimos por meio do módulo utilitário
(function(){
    this.diagnose = function(){
        return 'diagnosis';
    }
}).apply(myApp.utils.tools);
// note, esta mesma abordagem para extensão poderia ser aplicada
// No IIFE a passagem do argumento modifica o contexto
// 'this'

console.log(myApp); //o namespace está "preenchido"
console.log(myApp.utils.getValue()); // teste get
myApp.utils.setValue(25); // teste set
console.log(myApp.utils.getValue());
console.log(myApp.utils.tools.diagnose());

/*
IIFE e variáveis globais são mais utilizadas
para aplicações de médio a longo prazo, mas
em base de códigos maiores requer ambos namespaces e sub-namespace
que promove legilibilidade e escalabilidade

*/
// [Declarando Dependências]

/*
  Bibliotecas Javascript são modular e namespaced, permite
  incluir módulos que precisamos.Ex: YUI2 possui
  uma variável global YAHOO, serve como namespace e os módulos
  são propriedades da variável global.Ex: YAHOO.util.Dom, YAHOO.util.Event
  é uma ótima ideia declarar módulos do seu código no topo da função.
  essa declaração tem a criação de uma variável local que aponta
  para o módulo desejado.
*/

var myFunction = function () {
 // dependências
 var event = YAHOO.util.Event,
 dom = YAHOO.util.Dom;
 //...
};

/*
  . vantagens: declaração de dependências

  - trabalhar com variável local (como dom) é bem mais rápido que trabalhar
  com variável global como (Yahoo) e ainda mais rápido que trabalahr com propriedades
  aninhadas de uma variável global(como YAHOO.util.Dom ), resulta num melhor desempenho

  -ferramentas minification avançadas como YUICompressor.Irá mudar o nome da variável local
  ex: A, resultando é um código menor veremos abaixo.

  -declaração explícita de sinais de dependências para os usuários de 
  seu código específico arquivos de script que eles precisam para ter 
  certeza estão incluídas na página.

*/

function test1() {
 alert(MYAPP.modules.m1);
 alert(MYAPP.modules.m2);
 alert(MYAPP.modules.m51);
}

/*
minified test1 body:
alert(MYAPP.modules.m1);alert(MYAPP.modules.m2);alert(MYAPP.modules.m51)
*/

function test2() {
 var modules = MYAPP.modules;
 alert(modules.m1);
 alert(modules.m2);
 alert(modules.m51);
}
/*
minified test2 body:
a=MYAPP.modules;alert(a.m1);alert(a.m2);alert(a.m51)
*/


