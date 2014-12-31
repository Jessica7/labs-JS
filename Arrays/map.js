/*
  . map
    -recebe uma lista de valores(matriz ou objeto)
    -retorna uma lista atualizada
*/

var food = ["meat","juice","rice","ham"];

function doSomething(value, index, array){
  return "I like " + value;
}
var result = food.map(doSomething);

console.log(food);
console.log(result);