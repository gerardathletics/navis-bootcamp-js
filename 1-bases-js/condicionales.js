// if 
const edad = 26;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}


// if else 
const edad2 = 26;

if (edad2 >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// if - else if - else
const edad3 = 26;

if (edad3 >= 18) {
  console.log("Eres mayor de edad");
} else if (edad3 >= 13) {
  console.log("Eres un adolescente");
} else {
  console.log("Eres un niño");
}

// & Nos permite combinar dos condiciones, se cumple si se cumplen las dos. 
const edad4 = 26;
const dinero2 = 1000;

if (edad4 >= 18 && dinero2 >= 1000) {
  console.log("Eres mayor de edad y tienes dinero");
}

// || Nos permite combinar dos condiciones, se cumple si se cumplen alguna de las dos condiciones. 
const edad5 = 32;
const dinero3 = 1000;

if (edad5 >= 18 || dinero3 >= 1000) {
  console.log("Eres mayor de edad o tienes dinero");
}

// El operador ! nos permite negar una condición.
const edad6 = 32;

if (!edad6 >= 18) {
  console.log("No eres mayor de edad");
}


//El operador == nos permite comparar dos valores. Se cumple si los dos valores son iguales.
const edad7 = 32

if (edad7 == 18) {
  console.log('Tienes 18 años')
}


//El operador === nos permite comparar dos valores. Se cumple si los dos valores son iguales y del mismo tipo.
const edad8 = 32

if (edad8 === 18) {
  console.log('Tienes 18 años')
}


//El operador != nos permite comparar dos valores. Se cumple si los dos valores son diferentes.
const edad9 = 32

if (edad9 != 18) {
  console.log('No tienes 18 años')
}


//El operador !== nos permite comparar dos valores. Se cumple si los dos valores son diferentes y/o de diferente tipo.
const edad10 = 32

if (edad10 !== 18) {
  console.log('No tienes 18 años')
}