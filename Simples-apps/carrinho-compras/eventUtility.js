var eventUtility = {

  addEvent: function(el, type, fn){

    if(typeof addEventListener !== "undefined"){
      el.addEventListener(type, fn, false);
    }else if(typeof attachEvent !== "undefined"){
      el.attachEvent("on" + type, fn);
    }else{
      el["on" + type] = fn;
    }

  },

  removeEvent: function(el, type, fn){

    if(typeof removeEventListener !== "undefined"){
      el.removeEventListener(type, fn, false);
    }else if(typeof attachEvent !== "undefined"){
      el.detachEvent("on" + type, fn);
    }else{
      el["on" + type] = null;
    }

  },

  getTarget: function(event){

    if(typeof event.target !== "undefined"){
      return event.target;
    }else{
      return event.srcElement;
    }
  },

  preventDefault: function(event){

    if(typeof event.preventDefault !== "undefined"){
        event.preventDefault();
    }else{
      event.returnValue = false;
    }

  },

  stopP: function(event){

    if(typeof event.stopPropagation !== "undefined"){
        event.stopPropagation();
    }else{
      event.cancelBubble = true;
    }

  },

  keyCod: function(event){

    var key = event.charCode ? event.charCode : event.keyCode ;
    //if(key == "97") console.log(key);
    console.log(key);
   }

};