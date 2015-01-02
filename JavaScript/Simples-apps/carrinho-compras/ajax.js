function getText(url, callback){

  var request = new XMLHttpRequest();
  request.open("GET", url); 

  request.onreadystatechange = function(){        

    if(this.readyState === 4 && this.status === 200){

      var type = request.getResponseHeader( "Content-Type" );

      if( type === ( "application/json") ) { 

       var all = JSON.parse(request.responseText);
       
        all.forEach(function( el, idx, arr ) {  
           callback(el.cod,el.preco,el.titulo); 
        });

      } 
      else{
        callback( 'Erro 404' );                  
      }
    }

  }; 

 request.send(null);
}