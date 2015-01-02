var el = document.querySelector('#produtos');

eventUtility.addEvent( el, 'click', function(evt){

    var target       =  eventUtility.getTarget( evt ),
        li           =  target.parentNode, 
        cod          =  li.getAttribute('data-cod'),
        titulo       =  li.getAttribute('data-titulo'),
        preco        =  li.getAttribute('data-preco');

    if(li.className == 'list-pro'){
      console.log(preco);
      Carrinho.addi( cod , titulo , preco );
      Carrinho.compraTotal( preco , Carrinho.sacola.length );
    }

});
 

(function(){ 

function writeText(cod,titulo, preco){
  dom.writeProduct(cod, titulo, preco);
}

getText('dados.json', writeText);  


})();