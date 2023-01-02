// EJERCICIO 1

//  Muestra en la consola el texto de cada uno de los párrafos.
const parrafos = document.querySelectorAll("p");

parrafos.forEach((parrafo) => {
  console.log(parrafo.textContent);
});

// Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const parrafos2 = document.getElementsByClassName("parrafo");

for (let i = 0; i < parrafos2.length; i++) {
  console.log(parrafos2[i].textContent);
}

// Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
const parrafos3 = document.querySelectorAll("p.parrafo");

parrafos3.forEach((parrafo) => {
  parrafo.textContent = "Hola Mundo";
});

// Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
parrafos3.forEach((parrafo) => {
  parrafo.style.backgroundColor = "red";
});

parrafos3.forEach((parrafo) => {
  const span = document.createElement("span");
  span.textContent = "Infiltrado";
  parrafo.appendChild(span);
});

// EJERCICIO 2
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const ul = document.createElement("ul");

users.forEach((user) => {
  const li = document.createElement("li");
  li.textContent = user.name;
  if (user.isPremium) {
    li.style.backgroundColor = "gold";
    li.setAttribute("title", "Usuario premium");
  }
  ul.appendChild(li);
});

document.body.appendChild(ul);

// EJERCICIO 3


window.onload = () => {
  const colores = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
  ];

  const div = document.createElement("div");

  // Establece el color de fondo aleatorio
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  div.style.backgroundColor = colorAleatorio;

  // Establece el tamaño del cuadrado en función del color de fondo
  if (
    colorAleatorio === "red" ||
    colorAleatorio === "green" ||
    colorAleatorio === "blue"
  ) {
    div.style.width = "100px";
    div.style.height = "100px";
  } else if (
    colorAleatorio === "yellow" ||
    colorAleatorio === "pink" ||
    colorAleatorio === "purple"
  ) {
    div.style.width = "200px";
    div.style.height = "200px";
  } else if (colorAleatorio === "orange") {
    div.style.width = "300px";
    div.style.height = "300px";
  }

  // Establece el texto del cuadrado
  div.textContent = "Soy un cuadrado";
  div.style.color = "white";
  div.style.textAlign = "center";

  // Añade el cuadrado al documento HTML
  document.body.appendChild(div);
};
