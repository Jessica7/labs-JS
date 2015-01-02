/*
. STRATEGY
  - Permite que você selecione algoritmos em tempo de execução. 
  Clientes podem trabalhar com a mesma interface e selecionar
  o algoritmo apropriado baseado no contexto.

  - baseado em alguns principios:
    encapsulamento de algoritmos
    semelhante ao factory mas difere por possuir várias strategies(regras),
    não é priciso implementar várias interfaces

  - quando utilizar:
    quando se tem uma classe que é sujeito a mundanças frequêntes  ou
    caso tenha subclasses relacioandas que difere apenas no comportamento.

  - O strategy é utilizado para definir algoritmos como:  
    algoritmo de ordenação ideal para diferentes tipos de dados
    algoritmos diferentes para contar desconto de produtos com base no tipo de usuário
    algoritmos diferentes para converter uma imagem/arquivo para o formato diferente

  [Benefícios]: 
  -poderá implementar objetos genérico(como validação de fomulário)
   que poderá ser configurado de acordo com as regras das validações.
  -Esconde a lógica complexa ou dados que  o cliente não precisa saber
  -o estrategy Evita declarações de if e else.
*/

/*
 Caso de uso: Validação de Formulário
-criaremos um objeto de validação e o método validate()
*/

// Dados de Validação, vamos supor que os dados estão vindo do formulário:
var dataFromForm = {
 first_name: "Jéssica Nascimento",
 age: 1991
};

// configura o validador de acordo com nossas regras
config = {
  first_name: 'isNonEmpty',// não poderá receber valor vazio
  age: 'isNumber' // receberá só números
};

// strategies(regras) da validação
var strategies = {
 isNotEmpty: {
     validate: function (value) {
         return value !== "";
     },
     instructions: "the value cannot be empty"
 },
 isNumber: {
     validate: function (value) {
         return !isNaN(value);
     },
     instructions: "the value can be a number"
 },
 isBoolean: {
     validate: function (value) {
         return typeof value === 'boolean';
     },
     instructions: "the value can be a boolean"
 }
};


var validator = (function () {
 
var types = [],
    messages,
    config,
    validate,
    hasErrors,
    getMessages,
    configure,
    addStrategies;
 
configure = function (configuration) {
    config = configuration;
};
 
addStrategies = function (strategies) {
    types = strategies;
};
 
validate = function (dataFromForm) {
 var data,
     msg,
     type,
     checker,
     resultOk;
 
messages = [];
 
for (data in dataFromForm) {
 
    if (dataFromForm.hasOwnProperty(data)) {
 
        type = config[data];
        checker = types[type];
 
    if (!type) {
        continue;
    }
 
    if (!checker) {
        throw{
            name: "ValidationError",
            messages: "No handler to validate type " + type
        };
    }
 
    resultOk = checker.validate(dataFromForm[data]);
 
    if (!resultOk) {
       msg = "Invalid value for " + data + ", " + checker.instructions;
       messages.push(msg);
    }
  }
}
 
};
 
hasErrors = function () {
    return messages.length !== 0;
};
 
getMessages = function () {
    return messages;
};
 
return {
 configure: configure,
 validate: validate,
 hasErrors: hasErrors,
 getMessages: getMessages,
 addStrategies: addStrategies
}
 
})();


// Executando o validador

validator.configure(config);
validator.addStrategies(strategies);
 
try {
 validator.validate(dataFromForm);
 if (validator.hasErrors()) {
 console.log(validator.getMessages());
 } else {
 console.log("validação ok!");
 }
} catch (e) {
 console.log(e.name + ": " + e.message)
}