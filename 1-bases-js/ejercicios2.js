// 1
const doblador = (a) => a + a;
console.log(doblador(50));

// 2
const cuadratico = (b) => b * b;
console.log(cuadratico(50));

// 3
const areaRect = (lado1, lado2) => lado1 * lado2;
console.log(areaRect(5, 8));

// 4
const parImpar = (num) => {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
};
console.log(parImpar(6753));
console.log(parImpar(6758));


// 5
const personas = [
  { nombre: "Juan", edad: 18 },

  { nombre: "María", edad: 16 },

  { nombre: "Pedro", edad: 20 },

  { nombre: "Pablo", edad: 15 },

  { nombre: "Laura", edad: 19 },
];

const mayoresDeEdad = (personas) => {
  let mayoresDeEdad = [];
  for (let persona of personas) {
    if (persona.edad >= 18) {
      mayoresDeEdad.push(persona);
    }
  }
  return mayoresDeEdad;
};
console.log(mayoresDeEdad(personas));


const personaMasJoven = (personas) => {
  let personaMasJoven = personas[0];
  for (let persona of personas) {
    if (persona.edad < personaMasJoven.edad) {
      personaMasJoven = persona;
    }
  }
  return personaMasJoven;
};
console.log(personaMasJoven(personas));

const personaMasMayor = (personas) => {
  let personaMasMayor = personas[0];
  for (let persona of personas) {
    if (persona.edad > personaMasMayor.edad) {
      personaMasMayor = persona;
    }
  }
  return personaMasMayor;
};
console.log(personaMasMayor(personas));

// 6 
const pokemons = [
  { nombre: "Pikachu", tipo: "electrico" },
  { nombre: "Charmander", tipo: "fuego" },
  { nombre: "Bulbasaur", tipo: "planta" },
  { nombre: "Squirtle", tipo: "agua" },
  { nombre: "Pidgey", tipo: "volador" },
  { nombre: "Rattata", tipo: "normal" },
];

const pokeList = (pokemons) => {
  for (let pokemon of pokemons) {
    console.log(pokemon.nombre);
  }
};
pokeList(pokemons);

const pokemonsFuego = (pokemons) => {
  for (let pokemon of pokemons) {
    if (pokemon.tipo === "fuego") {
      console.log('tipo fuego: '+ pokemon.nombre);
    }
  }
};

pokemonsFuego(pokemons);