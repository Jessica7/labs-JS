/*
   . some
    -Determina se a função de retorno da chamada especificada
    retorna true para qualquer elemento de uma matriz.
*/

var students = ["Lia","Robert","John","grace"];

function startsWithG(value, index, array){
  return value[0] === "g";
}

var result = students.some(startsWithG);

alert(result); // true