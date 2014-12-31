/*
  * prototype em JS

  Se conseguimos adicionar o método na função
  porque usar PROTOTYPE ?

  . Cada vez que instânciarmos um objeto a partir
  da função construtora um novo método será carregado
  novamente na memória.

  . Quando utilizamos o PROTOTYPE ao instânciar um objeto
  este tem uma referência __pro__ para o prototype da função que o construiu
  ou seja, só haverá um método na memória: o definido no prototype da função.
  
  . Podemos imaginar que o prototype é uma características do objeto
    Um atributo prototype aponta para o objeto pai, o objeto do qual 
    foram herdadas as propriedades.
*/

//  * Formas de atribuir protótipos

// Atribuição via construtor
function Veiculo() { }
Veiculo.prototype.acelerar = function() {
    console.log('ok');
}

var moto = new Veiculo();

// Atribuição Direta
var veiculo = {
  buzinar: function(){
    console.log('ok');
  }

};

var carro = Object.create(veiculo);
var moto  = Object.create(veiculo);
carro.buzinar();
moto.buzinar();

// Atribuição on-the-fly
var veiculo = {
  buzinar: function(){
    alert('ok');
  }

};

var carro = {};
carro.__proto__ = veiculo;
carro.buzinar();

/*
  * Object.create não é suportado em navegadores antigos como o IE8, mas
    existe polyfill.

  *[[Prototype]] vs prototype:

   -A propriedade prototype explicita é uma propriedade de um objeto função.
   -Já o [[Prototype]] implicito, é o nome da propriedade interna dos objetos.
   -Acessamos o [[proptotype]] utilizando Object.getPrototypeOf()

  -Em navegadores Firefox, Safari, Chrome tem o __proto__ como propriedade
   alternativa para acessar propriedades protótipo de um objeto . 

  - __proto__ (propriedade não padrão ) é equivalente a [[Prototype]]

*/


/*
  * Cadéia de Protótipo

  -análise:
  repare que nosso construtor Juridico
  não possui prorpiedades como: email e desconto,
  mas os seus protótipos possuem.Então para
  acessá-los iremos acessar a cadeia de protótipos.
*/

function Cliente(nome, email) {
    this.nome = nome;
    this.email = email;
    this.desconto = true;
}
function Fisico(nome) {
    this.nome = nome;
    this.email = "itau@vendas.com";
}
function Juridico(nome) {
    this.nome = nome;
    this.cnpj = "78.495.946/00013";
}

Fisico.prototype = new Cliente();
Juridico.prototype = new Fisico();

var cliJuridico = new Juridico("Marcio");

console.log(cliJuridico.cnpj); // 78.495.946/00013
console.log(cliJuridico.email); // itau@vendas.com
console.log(cliJuridico.desconto); //  true






