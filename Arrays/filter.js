
/*
  . filter() :
    -Retorna elementos de uma matriz 
    -Itera de forma crescente.
*/

var country = ["Brasil","Mexico","Argentina","Peru"];

function AmericaLatina(value, index, array){
  return value[0] === "a" || value[0] === "B";
}

var result = country.filter(AmericaLatina);
console.log(country); 
console.log(result); 