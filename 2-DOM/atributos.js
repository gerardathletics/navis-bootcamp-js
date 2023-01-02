var h1 = document.querySelector("h1");

console.log(h1.hasAttribute("id"));
console.log(h1.getAttribute("id"));

h1.setAttribute('id', 'NewID');
console.log(h1.getAttribute("id"));

//removeAttribute('id'); would remove the attribute
console.log(h1.attributes);


// Atributos personalizados
const div = document.querySelector('div');
console.log(div.dataset.username); // pepe