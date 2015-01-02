/*
  . slice
    -retorna um objeto de array com a parte especifica
    -Recebe dois parâmetros(inicio/fim), o segundo é opcional.
*/

var cores = ['pink','orange','blue','green']
var all = cores.slice(0,3);

// slice com Call
function list(){
  return Array.prototype.slice.call(arguments, 0);
}
var list1= list('pink','blue','black');