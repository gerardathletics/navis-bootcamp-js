let expenses = [];

function spendController() {
  let expenses = [];

  while (true) {
    let command = prompt("Introduce un comando (add, list, edit, delete, salir)");

    if (command === "add") {
      addExpense(expenses);
    } else if (command === "list") {
      listExpenses(expenses);
    } else if (command === "edit") {
      editExpense(expenses);
    } else if (command === "delete") {
      deleteExpense(expenses);
    } else if (command === "salir") {
      break;
    } else {
      console.log("Comando desconocido, vuelve a intentarlo");
    }
  }
}

// función para añadir un gasto
function addExpense(expenses) {
  let name = prompt("Introduce el nombre del gasto");
  let cost = prompt("Introduce el coste del gasto");

  expenses.push({ name: name, cost: cost });
}

// mostrar el listado de gastos
function listExpenses(expenses) {
  expenses.forEach(function (expense) {
    console.log(`${expense.name}: ${expense.cost}`);
  });
}
function editExpense() {

  index = prompt("Introduce el índice del gasto que quieres editar");

  let name = prompt("Introduce el nuevo nombre del gasto");
  let cost = prompt("Introduce el nuevo coste del gasto");

  expenses[index] = { name: name, cost: cost };
}

// función para eliminar un gasto
function deleteExpense() {
  let name = prompt("Introduce el nombre del gasto que quieres eliminar");

  let index = expenses.findIndex(function(expense) {
    return expense.name === name;
  });

  // si el gasto existe en la lista, lo eliminamos
  if (index !== -1) {
    expenses.splice(index, 1);
  } else {
    console.log("El gasto no existe en la lista");
  }
}

spendController();
