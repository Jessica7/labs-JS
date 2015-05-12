/*********************************
        Operador new 
***********************************/

/*
O operador (NEW) garante que o objeto referenciado
pela palavra THIS  seja retornado ao témino da função

Se houver uma função de retorno(explícita), então
o retorno será influênciado pelo operador NEW .

- Criamos um objeto do tipo string sem o new e outro do tipo objeto com new

- Quando uma função é invocada por meio do operador NEW , é criada a instância do Object
e é atribuida a THIS. 

- Já a função que invocamos de forma simples o this será criado em Window,
  ou seja, o this irá apontar para o objeto global Window.

*/

var Curso = function(nome) {
    this.nome = nome;
    return "curso " + nome;
}
  
// Invocando como função
var stringEngenharia =  Curso(" Engenharia da Computação ");
typeof(stringEngenharia); // "string"
console.log(stringEngenharia); 

// Invocando como construtor 
var objetoEngenharia = new Curso("Engenharia da Computação"); 
typeof(objetoEngenharia); // object
console.log(objetoEngenharia.nome); 

/*

OBS: 

Quando executamos o JS no navegador , a variável global chamada é
window, ela é criada para representar a própria janela do navegdor
então quando é utilizada a forma simples de invocação  o this é equivalente
ao window, até atributos pode ser adicionados ao window isto é
quando criamos fora do escopo da função.


*/
