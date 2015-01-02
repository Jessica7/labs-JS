(function(){

  var source   = $(".post").html();
  var template = Handlebars.compile(source);

  var context = {

  	author: {
  		firstName : "João",
  		lastName  : "Oliveira"
  	},
  	body  : "I want use Handlebars",

  	comments : [{
  		author: {
  			firstName : "Jéssica",
  			lastName : "Oliveira"
  		}, 
  		body: "Here is comment"
  	},{
  		author: {
  			firstName : "Josy",
  			lastName : "Dias"
  		}, 
  		body: "Here is my comment!"
  	}]
  };

  Handlebars.registerHelper('fullName', function(person) {
  	return person.firstName + " " + person.lastName;
  });

  var html = template(context);

  $(".post").html(html);

}());