// EJERCICIO 1
// Obtener el elemento div con la clase app
var app = document.querySelector(".app");

// Crear la imagen
var img = document.createElement("img");

// Establecer los atributos de la imagen
img.src = "https://via.placeholder.com/150";
img.alt = "Imagen de ejemplo";

// Añadir la imagen al elemento div
app.appendChild(img);

//  ¿Podrías insertar la imagen antes del primer párrafo? Toca investigar 🦩

// Obtener el primer párrafo
var p = app.querySelector('p');

// Insertar la imagen antes del primer párrafo
// app.insertBefore(img, p);

const p2 = document.querySelector("p:nth-child(2)");
app.insertBefore(img, p2);

// EJERCICIO 2
var app2 = document.querySelector(".app2");


const animals = [
  { name: "Lion King", isCarnivore: true },
  { name: "Plant", isCarnivore: false },
  { name: "Ant", isCarnivore: true },
  { name: "Bee", isCarnivore: true },
  { name: "Mouse", isCarnivore: true },
];

// Crear las dos listas
const carnivoresList = document.createElement("ul");
const herbivoresList = document.createElement("ul");

// Crear un fragmento de documento para añadir los elementos de forma eficiente
const fragment = document.createDocumentFragment();

// Iterar a través del array de animales
animals.forEach((animal) => {
  const li = document.createElement("li");

  // Establecer el contenido del elemento li
  li.textContent = animal.name;

  // Añadir la clase carnivore o herbivore según corresponda
  if (animal.isCarnivore) {
    li.classList.add("carnivore");
    li.textContent += " 🍖";
    carnivoresList.append(li);
  } else {
    li.classList.add("herbivore");
    li.textContent += " 🌱";
    herbivoresList.append(li);
  }

  // Añadir el elemento li al fragmento de documento
  fragment.append(li);
});
console.log(herbivoresList);
console.log(carnivoresList);

// Añadir los elementos al documento
app2.append(fragment);

// EJERCICIO 3

const users = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

// Obtener el template
const template = document.querySelector('template');

// Clonar el template
const clone = document.importNode(template.content, true);

// Añadir el código CSS al documento
const style = document.createElement('style');
style.textContent = clone.querySelector('style').textContent;
document.head.appendChild(style);

// Iterar a través del array de usuarios
users.forEach((user) => {
  // Clonar el template
  const card = clone.querySelector(".card").cloneNode(true);

  // Establecer los valores del usuario en la tarjeta
  card.querySelector("img").src = user.img;
  card.querySelector("img").alt = user.name;
  card.querySelector("h2").textContent = user.name;
  card.querySelector("p").textContent = user.description;

  // Añadir la tarjeta al documento
  document.body.appendChild(card);
});