
/*
  ForEach
  - Chama a função callback para cada elemento na matriz
  - Não modifica a matriz original, mas a função de retorno
    pode modificá-la.
*/

var filmes = ["Guerra nas Estrelas","Matrix","Star Wars","De volta para o futuro"];
function doSomething(value, index, array){
  alert(value);
}

filmes.forEach(doSomething);