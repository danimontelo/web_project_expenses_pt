let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

function calculateAverageExpense() {
  if (expenseEntries) {
    return totalExpensesValue / expenseEntries.length;
  } else {
    return 0;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const [categoria, valor] of expenseEntries) {
  totalExpensesValue += valor;
  console.log("Despesas totais:" + totalExpensesValue);
}
