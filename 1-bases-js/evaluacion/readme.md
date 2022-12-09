# Controlador de gastos - Indicaciones
Nos han encargado un controlador de gastos para una aplicación de gestión de finanzas.

El controlador debe permitir como mínimo:

 Añadir un gasto
 Mostrar un listado de gastos
 Editar un gasto
 Eliminar un gasto
Todo esto lo vamos a hacer con JavaScript por supuesto. Como aún no sabemos manipular el DOM (próximo módulo) vamos a hacerlo todo usando la consola del navegador y usando prompt para pedir datos al usuario.

Hay un par de bonus que puedes hacer:

 Los datos de los gastos se guardan en el localStorage para que no se pierdan al recargar la página.
 Cuando lo termines puedes incluir también los ingresos y mostrar un balance de los mismos.


Consejos:

Piensa bien la estructura de datos que vas a usar
Ten en cuenta la experiencia de usuario (que sea "feo" no es un problema, pero que no se pueda usar sí lo es).
Intenta hacerlo lo más modular posible, es decir, que cada función haga una cosa y lo haga bien.

# Aplicacion: Controlador de gastos

Este script de JavaScript implementa un controlador de gastos que permite a un usuario llevar un registro de sus gastos y realizar diferentes acciones sobre ese registro, como añadir, editar, eliminar o ver los gastos existentes, o ver el balance total de los gastos.

## Funciones

- `expensesController()`: esta función es la encargada de solicitar al usuario un comando a ejecutar y de llamar a la función adecuada en función del comando que se haya introducido. Utiliza un bucle `while` para solicitar continuamente un comando y se detiene cuando el usuario introduce el comando `Salir`.

- `addExpense()`: esta función solicita al usuario el nombre y el coste de un nuevo gasto, y lo añade a la lista de gastos.

- `listExpenses()`: esta función muestra en consola un listado de todos los gastos existentes en la lista, junto con su coste.

- `editExpense()`: esta función solicita al usuario el nombre del gasto que quiere editar, y luego solicita el nuevo nombre y el nuevo coste del gasto. El gasto se actualiza en la lista de gastos.

- `deleteExpense()`: esta función solicita al usuario el nombre del gasto que quiere eliminar, y lo elimina de la lista de gastos si existe.

- `calculateBalance()`: esta función recibe una lista de gastos y calcula el balance total de los gastos, es decir, la suma de los costes de todos los gastos en la lista.
