/*const sayHello = function() {
  console.log("Hello, world");
}
sayHello(); */

const sayHello = function(name) {
  console.log("Hello, " + name);
}

sayHello("Rebecca");

// using console.log:
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//using return
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);