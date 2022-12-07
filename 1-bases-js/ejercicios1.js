// 1 Crea tu primer hola mundo por consola!
console.log("Hola mundo");

// 2 
var nombre = 'Gerard';
var edad = 26;
var mayorDeEdad = true;
direccion = {
  calle: "Calle del ciervo",
  numero: 125,
  ciudad: 'Alicante'
};
var coloresFavoritos = ['Azul', 'verde', 'amarillo'];
var lenguajesFavoritos = ['Python', 'JavaScript', 'R'];
var mejorLenguaje = lenguajesFavoritos[0];
var peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length -1];
console.log(mejorLenguaje);
console.log(peorLenguaje);

// 3 
numero1 = 23;
numero2 = 39;
console.log(numero1 + numero2);

numero3 = 98;
numero4 = 12;
console.log(numero3 - numero4);

numero5 = 52;
numero6 = 44;
console.log(numero5 * numero6);

numero7 = 99;
numero8 = 11;
console.log(numero7 / numero8);

// 4
saludo = 'hola';
if (saludo === 'hola') {
  console.log("Ha saludado");
}

// 5
pokemons = ['pikachu', 'charmander', 'cleffairy']
for (var i = 0; i <pokemons.length; i++) {
    console.log(pokemons[i]);
};

console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);

console.log(pokemons.join(" "));

pokemons.forEach((pokemon) => {
  console.log(pokemon);
});

// 6

var pokemons2 = [
  {
    nombre: "raychu",
    tipo: "electrico",
  },
  {
    nombre: "bulbasur",
    tipo: "planta",
  },
  {
    nombre: "deoxys",
    tipo: "psiquico",
  },
];

pokemons2.forEach((pokemon) => {
  if (pokemon.tipo === "fuego") {
    console.log("¡Es un pokemon de fuego! 🔥");
  } else {
    console.log("No hay ningun pokemon tipo fuego...");
  }
});
