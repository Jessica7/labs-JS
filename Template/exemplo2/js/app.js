(function(){

  var ctx = {
    headers:[
      {
        id : 1, item: "one" 
      }, 
      { 
        id : 2, item: "two" 
      }, 
      { 
        id : 3, item: "three"
      }, 
      { 
        id : 4, item: "four" 
      }
    ]
  };

  var source = $(".selections").html();
  var template = Handlebars.compile(source);
  var html = template(ctx);

  $(".selections").html(html);

}());