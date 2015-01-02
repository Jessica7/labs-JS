(function(){

var obj   = JSON.parse(localStorage.getItem('sacola')),
    resQtd = 0,
    box   = document.querySelector('.box');
var allobj = JSON.parse(localStorage.getItem('sacola'));

  obj.forEach(function( el, idx, arr ) {
    getDados(el.cod, el.titulo, el.preco, idx);
  });

function getDados(cod, titulo, preco, idx){
  dom.writeDetalhe(cod, titulo, preco, idx);
}

var qtd     = document.querySelector('.qtd'),
    count   = 0;

box.addEventListener('click', function(evt){
   var target  = evt.target;  
   var index = target.parentNode.getAttribute('data-idx');
   console.log("index" + index);
   
  if( target.data == index ){
    count++;
    qtd.value = count;
    resQtd = qtd.value;
  }else{
    if(qtd.value > 1  ){
      count--;
      qtd.value = count;
    }
  }

  countQtd( resQtd, index );

});

function countQtd( qtd, d ) {
  allobj[d].subtotal = allobj[d].preco * qtd;
  console.log(allobj);
}

})();
