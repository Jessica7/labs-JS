
/*********************
    Error Handling
*********************/

/*
. Tipos de Erro

-EvalError: quando a função eval() é utilizado incorretamente.
-RangeError:quando uma variável numérica excede uma faixa de valores
que é permitida.
-ReferenceError: quando é feita uma referência invalida à um objeto.
-SyntaxError: erro de sintaxe.
-TypeError: Quando o tipo da variável não é
o mesmo que o esperado.
-URIError: encondeURI() e decodeURI() são usadas
de uma maneira incorreta.
-
. try, catch, finally

-try: contém o código onde poderá provocar o erro, o bloco try 
poderá possuir vários blocos catch.
-catch:manipula erros, caputura das exception lançada por try.
-finally:sempre executa o bloco de dados mesmo que uma execeção
 seja lançada

-obs: caso nehum erro ocorra o bloco catch nunca será executado.
      o valor de exception é o valor do erro que ocorreu
      no bloco try.

- Sintaxe:
*/

try{
  //...
} catch(err){
  //...
} finally{
  //...
}

/*
-o argumento recebido no catch possui várias informações 
-contém também uma instância do objeto de erro 
-Existe construtor para cada tipo de erro: EvalError, typeError...
-propriedades de erro são diferentes nos navegadores mas prorpriedades
básicas como name e message podem ser utilizdas em ambos navegadores. 

- atributos básicos do objeto Error:
*/

// name(tipo do erro), message(mensagem do erro)

var codErro = function(){

  var error = new Error('erro a ser tratado');
  error.name = 'CustomizarError';
  throw error;
};

try{
  codErro();
}
catch(e){
  console.log(e.name + '-' + e.message);
}

/*
-quando ocorre erros de tempo de execução uma instância
do objeto Error é criada para descrever esse erro.
-nota:
erros de tempo de execução: são erros que ocorrem quando o script tenta
executar uma ação que o sistema não pode executar.

-Os objetos Error podem ser criadas de forma explicita
como criamos no exemplo acima  ou criadas com o uso da instrução
throw.
- em instruções try/catch é criado o objeto Error de forma implicita.

. throw statement:
cria erros personalizados e controla
o fluxo do programa.

-erros podem ser divididos em dois:
  .Erros Programáticos: erros que ocorrem porque um desenvolvedor
  fez algo errado como um erro de digitação.
  . Erros de fluxo de execução:numa validação 
  de formulário, o usuário digitou algo errado, é normal
  processar o erro e pedir para digitar novamente.

 -para erros de fluxo de execução é aconselhável utilizar
 try/catch 

 - vamos personalizar erros com throw com a função de validar
 idade
*/

//Exemplo: 

function validateAge(age) { 
  if (age === '') return 

  age = +age
  
  if (isNaN(age)) {
    throw { name: 'BadAge', message: 'Invalid age' }
  }
  if (age < 5 || age > 150) {
    throw { name: 'BadAge', message: 'Age out of range' }
  }
}

try {
  var age = prompt("Enter your age please?") 
 
  validateAge(age)

  alert("The age is accepted!")
} catch(e) {
  alert("Error: "+e.message)
}

/*

- o que são exception ?
O valor de exception é o valor do erro que ocorreu no bloco try.
é representada por qualquer nome de variável exemplo argumento passado
catch.
*/

try {
    tryStatements
}
catch(exception){
    catchStatements
}
finally {
    finallyStatements
}

/*
-Nota:
exceções não são apenas um mecanismo de tratamento de erros
eles são  mais uma forma de influenciar o controle de
um fluxo de um programa, podem ser utilizados como um tipo
de break.

Ex:uma função que determina se um objeto
e os objetos armazenados no seu interior, possui pelo
menos 7 valores true.

*/

var FoundSeven = {};

function hasSevenTruths(object) {
  var counted = 0;

  function count(object) {
    for (var name in object) {
      if (object[name] === true) {
        counted++;
        if (counted == 7)
          throw FoundSeven;
      }
      else if (typeof object[name] == "object") {
        count(object[name]);
      }
    }
  }

  try {
    count(object);
    return false;
  }
  catch (exception) {
    if (exception != FoundSeven)
      throw exception;
    return true;
  }
}

//. Exceções condicionais

try {
   myroutine(); // pode lançar umas das três exceções abaixo
} catch (e if e instanceof TypeError) {
   // código que manipula a exceção TypeError
} catch (e if e instanceof RangeError) {
   // código que manipula a exceção RangeError
} catch (e if e instanceof EvalError) {
   // código que manipula a exceção EvalError
} catch (e) {
   // código que manipula exceções não especificadas
   logMyErrors(e); // passa o obejto da exceção para um manipular
}


/*
-análise do código:
Se e exception for intância do tipo 
especificado na condição IF de cada catch

-mas o exemplo acima não é um recurso que está disponível no EcmaScript
não é recomendado utilizar :(, o  IE, opera, safari não tem suporte
já o firefox tem suporte.Mas temos uma alternativa no exemplo abaixo:

*/

try {
   myroutine(); // pode lançar umas das três exceções abaixo
} catch (e) {
    if (e instanceof TypeError) {
       // código que manipula a exceção TypeError
    } else if (e instanceof RangeError) {
       // código que manipula a exceção RangeError
    } else if (e instanceof EvalError) {
       // código que manipula a exceção EvalError
    } else {
       // código que manipula exceções não especificadas
       logMyErrors(e); // passa o obejto da exceção para um manipular
    }
}

/*
Lembrete: utilizar unúmeras condições 
irá perder performace! #dica
*/
