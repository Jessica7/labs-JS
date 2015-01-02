var dom = {

  writeDetalhe: function(cod, titulo, preco, idd){

    var html = '';
    html += '<li data-idx='+ idd +'>';
    
    html +=   '<p>'+ titulo + preco + '</p>';
    html +=   '<p>qtd</p>';
    html +=    '<button class="mais" >+</button>';
    html +=   '<input type="text" class="qtd" value="1" minlenght="0"/></button>';
    html +=   '<button class="menos">-</button>';
    html += '</li>';
    document.querySelector('.box').innerHTML += html;

  } 

}