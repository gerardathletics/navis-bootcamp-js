// FORMA 1 INNTER HTML

// const board = document.querySelector('.board');

// const container = `
// <div>
// <p> created Item 1</p>
// <p> created Item 2</p>
// </div>
// `;

// board.innerHTML = container;


// FORMA 2 CREATE ELEMENT, tiene ventajas 

const board = document.querySelector('.board');

const container = document.createElement('div');
const item = document.createElement('p');
const item2 = document.createElement("p");

item.textContent = "Item 1 v2";
item2.textContent = "Item 2 v2";

const items = ["Item 3","Item 4"];

// Para añadir un elemento al DOM, tenemos que usar el método append de un elemento del DOM. Append añadirá el elemento al final de los hijos del elemento que estemos usando como referencia, en el ejemplo anterior, al final de los hijos del elemento body.


container.append(item, item2);
items.forEach((item) => {
    const pElement = document.createElement("p");
    pElement.textContent = item;
    container.append(pElement);
});

board.append(container);

// DocumentFragment es un objeto que nos permite crear un elemento del DOM, pero que no se añade al DOM.

const fragment = document.createDocumentFragment();

const pElement = document.createElement("p");
pElement.textContent = "Hola mundo Fragment";

const spanElement = document.createElement("span");
spanElement.textContent = "Hola mundo Fragment2";

fragment.append(pElement, spanElement);

document.body.append(fragment);

