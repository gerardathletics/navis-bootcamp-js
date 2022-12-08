// FUNCIONES
function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Gerard");

saludar("Juan");
saludar("Manu");


function sumar(num1, num2) {
  console.log(num1 + num2);
}
sumar(2, 3);


function sumar2(a, b) {
  return a + b
}

const resultado = sumar2(2, 3)
console.log(resultado)

// FUNCIONES FLECHA

const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};

saludarFlecha("Pepe");

const saludar2 = (nombre = "Pepe") => "Hola " + nombre;

console.log(saludar2());


const saludar3 = (nombre = "Pepe") => {
  return "Hola " + nombre;
};

console.log(saludar3());


const saludarEdad = (nombre = "Pepe", edad) => {
  return "Hola " + nombre + " tienes " + edad + " años";
};

console.log(saludarEdad("Juan", 32));