let expenses = [];

function expensesController() {

  while (true) {
    let command = prompt(
      "Introduce un comando (Añadir, Lista, Editar, Borrar, Balance o Salir)"
    );

    if (command === "Anadir" || command === "anadir" || command === "Añadir" || command === "añadir") {
      addExpense(expenses);
    } else if (command === "Lista" || command === "lista") {
      listExpenses(expenses);
    } else if (command === "Editar" || command === "editar") {
      editExpense(expenses);
    } else if (command === "Borrar" || command === "borrar") {
      deleteExpense(expenses);
    } else if (command === "Salir" || command === "salir") {
      break;
    } else if (command === "Balance" || command === "balance") {
      console.log(calculateBalance(expenses));
    } else {
      console.log("Comando desconocido, vuelve a intentarlo");
    }
  }
}

// función para añadir un gasto
function addExpense(expenses) {
  let name = prompt("Introduce el nombre del gasto");
  let cost = prompt("Introduce el coste del gasto");

  expenses.push({ name: name, cost: parseFloat(cost) });
  console.log("Gasto añadido: " + name + ', ' + cost + '€');
  console.log('Total gastado: ' + calculateBalance(expenses));
  console.log("------------------");
}

// mostrar el listado de gastos
function listExpenses(expenses) {
  expenses.forEach(function (expense) {
    console.log(`${expense.name}: ${expense.cost}`);
  });
  console.log("Total gastado: " + calculateBalance(expenses));
  console.log('------------------')
}

// editar los gastos
function editExpense() {

  let nameExpense = prompt("Introduce el nombre del gasto que quieres editar");

  let newName = prompt("Introduce el nuevo nombre del gasto");
  let newCost = prompt("Introduce el nuevo coste del gasto");

  expenses.forEach((expense) => {
    if (expense.name === nameExpense) {
      expense.name = newName;
      expense.cost = newCost;
    }
  });

}
// función para eliminar un gasto
function deleteExpense() {
  let nameExpense = prompt(
    "Introduce el nombre del gasto que quieres eliminar"
  );

  let index = expenses.findIndex(function(expense) {
    return expense.name === nameExpense;
  });

  // si el gasto existe en la lista, lo eliminamos
  if (index !== -1) {
    expenses.splice(index, 1);
  } else {
    console.log("El gasto no existe en la lista");
  }
  console.log("Total gastado: " + calculateBalance);

};

function calculateBalance(expenses) {
  let balance = 0;
  for (let i = 0; i < expenses.length; i++) {
    balance += expenses[i].cost;
  }
  return balance;
};

expensesController();
