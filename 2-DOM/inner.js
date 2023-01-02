// INNER HTML

var title = document.querySelector("h1");
console.log(title.innerHTML);

// También podemos modificar el contenido HTML de un elemento.
// var title = document.querySelector("h1");
// title.innerHTML = "Hola Mundo";

// Permite rápido acceso al contenido HTML de un elemento, pero no es recomendable usarlo para modificar el contenido de un elemento. El motivo es que si el contenido HTML del elemento contiene código JavaScript, este código se ejecutará. Esto puede ser un problema de seguridad. XSS (Cross Site Scripting).

// innerText
// es una propiedad que nos permite acceder al contenido de texto de un elemento.
var title2 = document.querySelector("h1");
console.log(title2.innerText);

var title2 = document.querySelector("h1");
title2.innerText = "Hola Mundo";

//textContent
var title3 = document.querySelector("h1");
console.log(title3.textContent);
// es la forma mas segura de modificar el texto de un elemento
var title3 = document.querySelector("h1");
title3.textContent = "Hola Mundo";