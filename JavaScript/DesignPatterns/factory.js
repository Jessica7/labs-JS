/*
  .FACTORY

  -O real objetivo do factory é criar vários objetos gerando assim várias
   instâncias. 
   OBS: Lembre-se que essas instâncias não são conhecidas em tempo de compilação.
   
  -O factory É utilizado quando estamos trabalhando com vários pequenos objetos
   ou componentes que compartilham as mesmas propriedades.
  -Abstrai construções que podem ser complexas.
  -reduz a duplicação das tarefas de inicialização em objetos similares.
  -Evita que funções construtoras não sejam chamadas sem a palavra new.
  -Um método estático é responsável por inicializar os objetos.
  -TDD é mais díficil. 
*/

// Pequeno Exemplo:
function User(attrs) {
  for (var name in attrs) {
    this[name] = attrs[name];
  }
}

User.factory = function(attrs) {
  return new User(attrs);
};

// inicializar um novo usuário
var user = User.factory({
    name: "Jéssica"
  , email: "jessica@empresa.com"
});

User.factory = function(attrs) {
  if (arguments.length === 2) {
    attrs = {
        name: arguments[0]
      , email: arguments[1]
    };
  }

  return new User(attrs);
};

//------------------------------------------------------------------
// Fábrica de Carros - exemplo:

// construtor que define new Car
function Car( options ){
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

// construtor que define new Truck
function Truck( options ){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
 
// Exemplo de factory
// estrutura que Define a fábrica de veículos
function VehicleFactory() {}
 
// Define os protótipos e utilitários para a fábrica
 
// nosso valor default vehicleClass é carro
VehicleFactory.prototype.vehicleClass = Car;
 
// método de fábrica para a criação de novas instâncias de veículos
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass( options );
};
 
// Cria uma instância da nossa fábrica de carros
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
            vehicleType: "car",
            color: "yellow",
            doors: 6 
          });

// agora utilizaremos a classe Truck 
var movingTruck = carFactory.createVehicle({
          vehicleType: "truck",
          state: "like new",
          color: "red",
          wheelSize: "small" 
        });

// Teste para confirmar se o nosso carro foi criada usando o vehicleClass/protótipo de Car
// Car 
console.log( car instanceof Car ); // true
console.log( car ); //Objeto Car - color:yellow, doors: 6, state:brand new

// Truck
console.log( movingTruck instanceof Truck ); // true
console.log( movingTruck );

//--------------------------------------------------------------
// Vamos construir uma Subclasse que irá construir uma fábrica de Trucks
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;
 
var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle( {
                    state: "omg..so bad.",
                    color: "pink",
                    wheelSize: "so big" } );
 
//verifica se  myBigTruck foi criado com prototypo de Truck
console.log( myBigTruck instanceof Truck );//true
console.log( myBigTruck );//state: "omg..so bad.", wheelSize: "so big", color: "pink"

//-----------------------------------------------------------------

// Outro Exemplo de Factory
// construtor pai
function CarMaker() {}
//um método do construtor pai
CarMaker.prototype.drive = function () {
 return "Vroom, I have " + this.doors + " doors";
};

// o método estático factory
CarMaker.factory = function (type) {
   var constr = type,
   newcar;
   // erro se o construtor não existir
   if (typeof CarMaker[constr] !== "function") {
     throw {
         name: "Error",
         message: constr + " doesn't exist"
     };
   }

   if (typeof CarMaker[constr].prototype.drive !== "function"){

      CarMaker[constr].prototype = new CarMaker();
   }

   // cria uma nova instância
   newcar = new CarMaker[constr]();

   return newcar;
};

// define a fábrica de automóveis
CarMaker.Compact = function(){
 this.doors = 4;
};
CarMaker.Convertible = function(){
 this.doors = 2;
};
CarMaker.SUV = function(){
 this.doors = 24;
};

var corolla  = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive(); // "Vroom, I have 4 doors"
solstice.drive(); // "Vroom, I have 2 doors"
cherokee.drive(); // "Vroom, I have 17 doors"
