// FOREACH 
const array = [1, 2, 3, 4, 5];

//El método forEach nos permite recorrer un array y ejecutar una función por cada elemento del array.
// Recibe como parámetro una función que se ejecutará por cada elemento del array.

array.forEach((element) => {
  console.log(element); // 1, 2, 3, 4, 5
});

// FILTER
// El método filter nos permite filtrar los elementos de un array que cumplan una condición.


const filteredArray = array.filter((element) => {
  return element > 3;
});
console.log(filteredArray);

// FIND

// Devuelve el primer elemento que cumpla la condición que pasaremos en forma de función.
// La función debe devolver un valor booleano, si es true el elemento se devolverá, si es false no se devolverá.
// Es similar al método filter pero en vez de devolver un array con todos los elementos que cumplan la condición, devuelve el primer elemento que cumpla la condición.

const foundElement = array.find((element) => {
  return element > 3;
});

console.log(foundElement); 

// MAP
// Devuelve un nuevo array con los elementos transformados.
// La función que pasemos como parámetro debe devolver el nuevo valor que queremos que tenga el elemento.

const arrayConNumerosDobles = array.map((element) => {
  return element * 2;
});

console.log(arrayConNumerosDobles);

//REDUCE
// Devuelve un único valor.
// La función que pasemos como parámetro debe devolver el nuevo valor que queremos que tenga el elemento.

const sumaDeTodosLosNumeros = array.reduce((acumulador, elemento) => {
  return acumulador + elemento;
});

console.log(sumaDeTodosLosNumeros);