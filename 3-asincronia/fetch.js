// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json()).then((json) => console.log(json));

async function getJsonDataFromUrl(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

getJsonDataFromUrl("https://jsonplaceholder.typicode.com/posts/").then(
  (value) => console.log(value)
);

const urlFakeStoreApi = "https://fakestoreapi.com/products";
getJsonDataFromUrl(urlFakeStoreApi).then((value) => console.log(value));

// Una petición HTTP es una petición que se hace a un servidor web. Esta petición puede ser de varios tipos

//Una API sin entrar en detalles es un conjunto de funciones que nos va a permitir interactuar con un servicio. Por ejemplo, la API de Twitter nos va a permitir interactuar con Twitter.

// Piensa una cosa, si por un momento fetch no fuera asincrónico, al hacer la petición al servidor para obtener los datos y esperar a que nos lo devuelva, no podríamos hacer nada más en nuestra aplicación. El usuario por ejemplo podría darle a un botón para cargar datos, pero se quedaría bloqueado todo hasta que termine de ejecutarse la petición.

// Basicamente las promesas funcionan como en la vida real, cuando hacemos una promesa a alguien, le decimos que vamos a hacer algo, pero no sabemos si lo vamos a cumplir o no. Por ejemplo, si le decimos a alguien que le vamos a llevar a cenar, no sabemos si lo vamos a hacer o no, pero le decimos que lo vamos a hacer. Y por supuesto será una acción a futuro.