/**
 *	
 *  { call }
 *				
 *	é um método que permite você dizer em qual escopo	
 *	a função deverá ser executada, ou seja, poderá modificar
 *	o contexto do this.
 *
 * 	
*/

var person1 = {name:'Jéssica', age: 24};
var person2 = {name:'Josy', 	age: 25};

var sayHi = function(){
	console.log('person1' + this);
	console.log('Hi' + this.name);
};

var sayHello = function(){
	console.log('person2' + this);
	console.log('Hello' + this.name);
};

sayHi.call(person1);
sayHello.call(person2);

/*
	o this da função sayHi() aponta para o objeto person1
	já sayHello() aponta para o person2.
	
*/

// método call com parâmetros

var employeer = 'jessica';

var enterprise = {employeer:'João'};

function information(a, b){
	console.log(this.employeer + ' - ' + a + ' - ' + b);
}

information('web developer', 'language: JS');
information.call(enterprise, 'DBA', 'Oracle');