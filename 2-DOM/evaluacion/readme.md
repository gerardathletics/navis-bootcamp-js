# Documentación de la aplicación de Javascript

Esta aplicación se encarga de mostrar una lista de películas en una página web, permitiendo al usuario agregar nuevas películas y buscar películas existentes por título. 

## Selección de elementos del DOM

La aplicación selecciona los siguientes elementos del DOM:
- `moviesList`: El contenedor donde se renderizará la lista de películas.
- `movieTemplate`: La plantilla que se utilizará para renderizar cada película en la lista.
- `addMovieForm`: El formulario que el usuario utilizará para agregar una nueva película.
- `searchMovieForm`: El formulario que el usuario utilizará para buscar una película por título.

## Funciones

- `renderMovies()`: Renderiza la lista de películas en la página, eliminando cualquier película previamente mostrada.
- `addMovie(event)`: Agrega una nueva película a la lista y la renderiza en la página. Se ejecuta cuando el usuario envía el formulario de "Añadir película".
- `searchMovie(event)`: Busca una película por título y la muestra en la página. Se ejecuta cuando el usuario envía el formulario de "Buscar película".

## Eventos

La aplicación agrega los siguientes eventos:
- `submit` al formulario de "Añadir película", para ejecutar la función `addMovie()` cuando el usuario envía el formulario.
- `submit` al formulario de "Buscar película", para ejecutar la función `searchMovie()` cuando el usuario envía el formulario.