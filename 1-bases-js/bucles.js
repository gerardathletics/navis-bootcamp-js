//El bucle while se ejecuta mientras la condición sea verdadera.

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

//El bucle do while se ejecuta al menos una vez y luego mientras la condición sea verdadera.

let e = 0

do {
  console.log(e)
  i++
} while (e < 10)

// La diferencia entre while y do while es que el primero comprueba la condición antes de ejecutar el código y el segundo ejecuta el código al menos una vez y luego comprueba la condición.

// El bucle for se ejecuta mientras la condición sea verdadera.
// Este bucle es algo más complejo de entender que los anteriores, pero es de los más utilizados.

// Podemos divirlo en 3 partes:

// Expresión inicial: se ejecuta una vez al principio del bucle.
// Condición: se ejecuta antes de cada iteración del bucle y comprueba si se debe ejecutar el bucle.
// Expresión final: se ejecuta al final de cada iteración del bucle.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// El bucle for in se utiliza para recorrer las propiedades de un objeto.

// Al ser iterables, los objetos son un tipo de dato que podemos recorrer con un bucle for in.

const persona = {
  nombre: 'Pepe',
  edad: 23,
  ciudad: 'Madrid'
}

for (const propiedad in persona) {
  console.log(propiedad) // nombre, edad, ciudad
  console.log(persona[propiedad]) // Pepe, 23, Madrid
}

// El bucle for of se utiliza para recorrer los elementos de un array.

// Es similar al bucle for, pero nos ahorrará varios pasos. No necesitaremos crear un contador y tampoco tendremos que acceder a los elementos del array con el índice.

const frutas = ["manzana", "pera", "naranja"];

for (const fruta of frutas) {
  console.log(fruta); // manzana, pera, naranja
}