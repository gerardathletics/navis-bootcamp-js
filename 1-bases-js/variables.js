

// String
const nombre = "Gerard";
const apellido = "Aaaaa";
const pais = `España`;

// Number
const edad = 26;
const altura = 1.8;
const dinero = -70000;

// Boolean
const esMayorDeEdad = true;
const esMenorDeEdad = false;

// Null
const millonario = null;


// Object
const persona = {
  nombre2: "Gerard",
  edad: 26,
  altura: 1.8,
  esMayorDeEdad: true,
  hobbies: ["leer", "pasear", "programar"],
  direccion: {
    calle: "Calle falsa",
    numero: 123,
  },
};

const nombre2 = persona.nombre2;
const nombreConCorchetes = persona["nombre"];

const primerHobbie = persona.hobbies[0];
const primerHobbieConCorchetes = persona["hobbies"][0];

const calle = persona.direccion.calle;
const calleConCorchetes = persona["direccion"]["calle"];


// Array
const numeros = [1, 2, 3, 4, 5];
const colores = ["rojo", "verde", "azul"];

const primerNumero = numeros[0];
const segundoNumero = numeros[1];
const colorPrimero = colores[0];