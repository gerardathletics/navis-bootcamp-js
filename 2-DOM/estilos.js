const heading = document.querySelector('h1');

// change or set css attributes
// heading.style.color= 'blue';
// heading.style.backgroundColor = "yellow";
// heading.style.padding = "2rem";

// console.log(heading.style.cssText);
// console.log(window.getComputedStyle(heading));

heading.style.cssText = 'background-color: orange; padding: 5rem; text-transform: uppercase'

console.log(heading.className);
// heading.className = "ruby"; // va a eliminar todas las clases anteriores
heading.classList.add('Ruby');
heading.classList.toggle("Ruby");
heading.classList.toggle("Ruby");
