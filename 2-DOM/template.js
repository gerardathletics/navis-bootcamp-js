const board = document.querySelector('.board');
const items = ["Item 1a", "Item 2b", "Item 3c", "Item 4d"];

const fragment = document.createDocumentFragment();

const templateTest = document.querySelector('#templateTest');

const pItems = templateTest.content.querySelectorAll('p');

pItems.forEach((p, i) => {
  p.textContent = items[i];
});

const clone = templateTest.cloneNode(true);

fragment.append(clone.content);
board.append(fragment);