var SlideShow = (function(){

  var imgs    = ['img/01.jpg','img/02.jpg','img/03.jpg'],
      prev    = document.getElementById('prev'),
      next    = document.getElementById('next'),
      box     = document.querySelector('.box img'),
      count   = 0;
           
  var loopImg = function(){
    count = (count != imgs.length - 1) ? count + 1 : 0;
    box.src = imgs[count];
    return count;
  };

  var setInt = function(){
  
    box.src = imgs[0];
    setInterval(function(){
      if(next > 0) setNext();
      loopImg();
    }, 3000);
  
  };  

  var setNext = function(){
    next.addEventListener('click', function(){
      var el = loopImg(); 
      setPrev(el);
    });
  };

  var setPrev = function(atual){

    prev.addEventListener('click', function(){
      atual--;
      box.src = imgs[atual];
      if(atual < 0) loopImg();
    });
  };

  var init = function(){
    setInt();
    setNext();
    setPrev();
  };
  
  return{
    init: init(),
  };

})();