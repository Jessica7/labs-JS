/*
  . indexOf 
    -percorre a matriz do inicio ao fim.
    -O primeiro argumento é o valor a ser pesquisado. 
    -O segunda argumento é opcional: especifica o indice que inicia a pesquisa. 
    -Caso o segundo argumento seja omitido: pesquisará toda a matriz
*/

var fruit = ["apples","oranges","bananas","grapes","oranges"];
var index = fruit.indexOf("oranges");// 1 
var index = fruit.lastIndexOf("oranges"); // 4

console.log(index);