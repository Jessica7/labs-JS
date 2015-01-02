
function writeInBody(arg){
  var div = document.getElementById('myDiv');
  div.innerHTML = arg;
}

function getText(url, callback){
  var request = new XMLHttpRequest();                      
  request.open("GET", url);                                 
  request.onreadystatechange = function(){                
    if(this.readyState === 4 && this.status === 200){  
      var type = request.getResponseHeader("Content-Type");
      if(type.match(/^text/)){                                              
        callback(this.responseText);
      } 
    }
  };

  request.send(null);
}

(function(){
  document.getElementById('click').addEventListener('click', function(){
    getText('teste.html', writeInBody);
    return false;
  });
})();