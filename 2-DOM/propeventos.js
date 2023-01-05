const body = document.querySelector('body');
const section = document.querySelector('section');
const div = document.querySelector('div');
const p = document.querySelector('p');
const span = document.querySelector('span');

span.addEventListener('click', (e) => {
    console.log("Evento del span");
    span.style.backgroundColor = "hsl(215, 100%, 50%)";
});

p.addEventListener("click", (e) => {
  console.log("Evento del p");
  span.style.backgroundColor = "hsl(215, 100%, 45%)";
});

div.addEventListener("click", (e) => {    
    console.log("Evento del div");
    span.style.backgroundColor = "hsl(215, 100%, 35%)";
    e.stopPropagation();
}); 

section.addEventListener("click", (e) => {               
    console.log("Evento del section");
    span.style.backgroundColor = "hsl(215, 100%, 25%)";
});

// body.addEventListener("click", (e) => {                                  
//     console.log("Evento del body");
//     span.style.backgroundColor = "hsl(215, 100%, 15%)";
// });

// document.addEventListener("click", (e) => {  
//     console.log("Evento del document");
// });