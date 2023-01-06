// EJERCICIO 1
// crear formulario con input de texto y boton tipo submit
const input = document.getElementById("inputText");
const button = document.getElementById("submitButton");
const paragraph = document.getElementById("paragraph");

button.addEventListener("click", function (event) {
  event.preventDefault(); // evita que el formulario sea enviado directamente

  const text = input.value; // obtiene el texto del input

  if (text.length < 5) {
    paragraph.style.color = "red";
  } else {
    paragraph.style.color = "black";
  }

  paragraph.textContent = text; // establece el texto del párrafo
  input.value = ""; // vacía el input
});

// EJERCICIO 2
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const inputText = document.getElementById("input2");
const copyText = document.getElementById("text");
const printedText = document.getElementById("result");

function compareText() {
  event.preventDefault();

  const inputTextValue = inputText.value;
  const copyTextValue = copyText.textContent;
  if (inputTextValue === copyTextValue) {
    printedText.style.color = "green";
  } else {
    printedText.style.color = "red";
  }
  printedText.textContent = inputTextValue;
}

//Compare the result with the sentence above word by word

function compareWordByWord(e) {
  e.preventDefault();

  const inputTextValue = inputText.value;
  const copyTextValue = copyText.textContent;
  const inputTextValueArray = inputTextValue.split(" ");
  const copyTextValueArray = copyTextValue.split(" ");
  const resultArray = [];

  for (let i = 0; i < inputTextValueArray.length; i++) {
    if (inputTextValueArray[i] === copyTextValueArray[i]) {
      resultArray.push(
        `<span style="color: green">${inputTextValueArray[i]}</span>`
      );
    } else {
      resultArray.push(
        `<span style="color: red">${inputTextValueArray[i]}</span>`
      );
    }
  }

  printedText.innerHTML = resultArray.join(" ");
}

// when you click enviar button, it will compare the text and print the result
const buttonEnv = document.getElementById("enviar");
buttonEnv.addEventListener("click", compareWordByWord);

//when you click Reset button, it will reset the input and remove the text below
const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", function () {
  inputText.value = "";
  printedText.textContent = "";
});

const buttonGen = document.getElementById("newText");

// Crea la array con las frases
const sentences = [
  "El tiempo es oro.",
  "A buen entendedor, pocas palabras.",
  "El que la sigue la consigue.",
  "Más vale tarde que nunca.",
  "El que calla, otorga.",
  "A Dios rogando y con el mazo dando.",
  "La prisa es mala consejera.",
  "No hay mal que por bien no venga.",
  "A rio revuelto, ganancia de pescadores.",
  "No hay dos sin tres.",
];

// Define la función que cambia la frase
function changeSentence() {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];
  text.textContent = randomSentence;
}

// Agrega un manejador de eventos para el evento 'click' del botón
buttonGen.addEventListener("click", changeSentence);

// Ejercicio 3
const container = document.querySelector(".color-container");
const btn = document.querySelector(".btn");

function cambiarColor() {
  // Genera un color aleatorio en formato hexadecimal
  const colorAleatorio =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Establece el color de fondo del div con el color aleatorio
  container.style.backgroundColor = colorAleatorio;

  // Establece el contenido del elemento con el código del color aleatorio
  container.querySelector(".color-code").textContent = colorAleatorio;
}

btn.addEventListener("click", cambiarColor);
