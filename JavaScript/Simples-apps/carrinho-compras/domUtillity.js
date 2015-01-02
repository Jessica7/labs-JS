var dom = {
  writeProduct : function(cod,titulo, preco){
    var html = '';
    html += '<a href="#modal">';
    html +=   '<li>';
    html +=    '<figure>';
    html +=      '<img src="img/'+ cod +'.jpg">';
    html +=      '<figcaption>';
    html +=        '<span class="titulo-pro">'+titulo+'</span><span class="preco" >'+preco+'</span> ';
    html +=      '</figcaption>';
    html +=    '</figure>';
    html +=    '<label>Quantidade</label>';
    html +=    '<button class="mais" >+</button>';
    html +=      '<input type="text" class="qtd" value="" minlenght="0"/></button>';
    html +=   '<button class="menos">-</button>';
    html +=    '<button class="btn-comprar" data-descricao="Moleton" data-preco="50" data-codigo="432">Comprar</button>';
    html +=  '</li> ';
    html += '</a>'; 
    this.doc.querySelector('#produtos').innerHTML += html;
  },
};