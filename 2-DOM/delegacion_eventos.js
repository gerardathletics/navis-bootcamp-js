const section2 = document.querySelector('section');
// const div = document.querySelector("div");
// div.style.width = '100px';                                         
// div.style.borderColor = "black";                                         

section2.addEventListener('click', (e) => {
  const div = e.target.closest("div");
  const color = div.dataset.color;
  e.target.classList.toggle("clicked");

  if (div) {
    div.style.backgroundColor = color;
  }
});

const lista = document.querySelector(".lista");
const items = document.querySelectorAll(".lista__item");

// delegación de eventos en el padre
lista.addEventListener("click", (event) => {
  // si el elemento que ha disparado el evento es un li
  if (event.target.closest("li")) {
    alert(event.target.textContent);
  }
});