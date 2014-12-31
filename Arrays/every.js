/*
  . Every
    -Determina se todos os elementos
    da matriz satisfazem o teste especifico
    -pode ser usado por qualquer objeto que tenha propriedade
    lenght.
*/

var languages = ["JavaScript","PHP","Ruby","Phyton","Java"];

function isString(value, index,array){
  return typeof value === "string";
}

console.log(languages.every(isString));