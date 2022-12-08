// 1 

const arrayStrings = [
  "arbol",
  "sol",
  "Agua",
  "luz",
  "montaña",
  "ciudad",
  "mar",
  "nube",
];

const empiezaPorA = (array) => {
  return array.filter((palabra) => {
    return palabra[0].toLowerCase() === "a";
  });
};
console.log(empiezaPorA(arrayStrings));

// 2
const pinCorrecto = "4444";

let intentos = 0;

while (intentos < 3) {
  const intentosRestantes = 3 - intentos;

  const pinIntroducido = prompt(
    `Introduce el PIN (${intentosRestantes} intento(s) restante(s)):`
  );
  if (pinIntroducido === pinCorrecto) {
    console.log("Pin aceptado");
    break;
  } else {
    console.log("Pin incorrecto");
    intentos++;
  }
}


while (true) {
  const pinIntroducido = prompt(
    "Introduce el PIN (escribe 'salir' para terminar):"
  );

  if (pinIntroducido === "salir") {
    break;
  }

  if (pinIntroducido === pinCorrecto) {
    console.log("Pin aceptado");
    break;
  } else {
    console.log("Pin incorrecto");
  }
}

// 3

const esPalindromo = (string) => {
  const stringMinusculas = string.toLowerCase();
  const stringSinEspacios = stringMinusculas.replace(/\s/g, "");
  const stringInvertida = stringSinEspacios.split("").reverse().join("");

  return stringInvertida === stringSinEspacios;
};

const palindromo1 = esPalindromo("A man a plan a canal Panama"); // true
const palindromo2 = esPalindromo("Madre mía, que belleza"); // false
console.log(palindromo1, palindromo2);

function contienePalindromos(array) {
  for (const string of array) {
    if (esPalindromo(string)) {
      return true;
    }
  }

  return false;
}

// 4


const likes = ["Juan", "María", "Pedro"];

function mostrarLikes(nombres) {
  switch (nombres.length) {
    case 0:
      return "No hay likes";
    case 1:
      return `${nombres[0]} ha dado like a esta foto.`;
    case 2:
    case 3:
      return `${nombres.slice(0, -1).join(", ")} y ${nombres.slice(-1)} han dado like a esta foto.`;
    default:
      return '${nombres[0]}, ${nombres[1]} y ${nombres.length - 2} personas más han dado like a esta foto';
  }
}

console.log(mostrarLikes(likes));

// 5

const users = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
];

function vivenMadrid(users) {
  return users
    .filter((user) => user.city === "Madrid")
    .map((user) => user.name);
}

const personasVivenMadrid = vivenMadrid(users);
console.log(personasVivenMadrid);

function mas25(users) {
  return users.filter((user) => user.age >= 25).map((user) => user.name);
}
const personasMas25 = mas25(users);
console.log(personasMas25);

function mas25Madrid(users) {
  return users
    .filter((user) => user.age >= 25 && user.city === "Madrid")
    .map((user) => user.name);
}
const mas25enMadrid = mas25Madrid(users);
console.log(mas25enMadrid);

function primerProgramar(users) {
  return users.find((user) => user.hobbies.includes("programar"));
}
const primerProgramador = primerProgramar(users);
console.log(primerProgramador);

function edadTotal(users) {
  return users.reduce((total, user) => total + user.age, 0);
}
const sumaEdades = edadTotal(users);
console.log(sumaEdades);

function ciudadHobby(users) {
  return users.map((user) => ({
    city: user.city,
    firstHobby: user.hobbies[0],
  }));
}
const arrayCiudadHobby = ciudadHobby(users);
console.log(arrayCiudadHobby);

// 6
function ordenaStrings(arr) {
  arr.sort();
  return arr;
}

const strings = ['perro', 'gato', 'elefante', 'ardilla'];
const stringsOrdenados = ordenaStrings(strings);
console.log(stringsOrdenados); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sinDuplicados = (numbers) =>
  numbers.filter((number, index) => numbers.indexOf(number) === index);

console.log(sinDuplicados(numbers));


const users2 = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 35,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
];

function eliminaDuplicados(arr) {
  const sinDuplicados = [];

  arr.filter((obj) => {
    if (!sinDuplicados.includes(obj)) {
      sinDuplicados.push(obj);
    }
  });

  return sinDuplicados;
}

console.log(eliminaDuplicados(users));