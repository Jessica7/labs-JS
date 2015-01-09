(function(){

  var ctx = {
    headers:[
      {
        author :{firstName: "Jessica", lastName: "Oliveira"},
        comment: "lorem ipsum",
        gravatar : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZpjZEebqcW8q_bTqfYndbKP0sJkb6cwPc4JCFyIpaa45jsh8y" 
      }, 
      { 
        author :{firstName: "Josy", lastName: "Nascimento"},
        age  : 22,
        comment: "lorem ipsum" 
      }, 
      { 
        author :{firstName: "Liezio", lastName: "Batista"},
        comment: "lorem ipsum",
        gravatar : "http://carleton.ca/ccms/wp-content/uploads/manga_smitty.jpg"
      },
      { 
        author :{firstName: "Rúbia", lastName: "Dias"},
        comment: "lorem ipsum",
        age: 26 
      }
    ]
  };

  var source = $(".selections").html();

  Handlebars.registerHelper('fullName', function(author) {
    return author.firstName + ' ' + author.lastName; 
  });

  var template = Handlebars.compile(source);
  var html = template(ctx);

  $(".selections").html(html);

}());