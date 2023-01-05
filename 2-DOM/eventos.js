

const button = document.querySelector(".btn");

// Mode 1
// button.onclick = function () {
//     console.log("Saludo desde la propiedad");
// };

//Mode 2
// button.addEventListener("click", () => {
//     console.log("Saludo desde el addEventListener");
// });
// button.addEventListener("click", () => {
//   console.log("Adios desde el addEventListener");
// });

// Mode 3 , diferentes formas de anadir una funcion 
button.addEventListener("click", () => {
  console.log("Saludo desde el addEventListener");
});

function adios(event) {
    event.target.textContent = "Me hiciste click";
    console.log("Adios desde el addEventListener");
    console.log(event.target)
}

button.addEventListener("click", adios)


/* Los tipos de eventos que podemos añadir a un elemento son variados, pero los más comunes son:

click: Se produce cuando se hace click en el elemento.
mouseover: Se produce cuando el ratón pasa por encima del elemento.
mouseout: Se produce cuando el ratón sale del elemento.
keydown: Se produce cuando se pulsa una tecla.
keyup: Se produce cuando se suelta una tecla.
change: Se produce cuando cambia el valor de un elemento.
submit: Se produce cuando se envía un formulario.*/
