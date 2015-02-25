
var SlideShow = (function(){

  var imgs    = ['img/01.jpg','img/02.jpg','img/03.jpg'];
  var next    = document.getElementById('btn');
  var box     = document.querySelector('.box img');
  var count   = 0;
  
 var setInt = function(){
  setInterval(function(){

    for(var i = 0; i < imgs.length; i++){
      console.log(imgs[i]);
    }
    count = (count != imgs.length - 1) ? count + 1 : 0;
    box.src = imgs[count];

  }, 3000);   
    
  };

  return{
    setInt: setInt
  };

})();

SlideShow.setInt(); 



