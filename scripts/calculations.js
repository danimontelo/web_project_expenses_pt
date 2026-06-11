let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

function calculateAverageExpense() {
  if (expenseEntries.length > 0) {
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

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  let largestCategory = "";
  let largestValue = 0;
  for (const expense of expenseEntries) {
    const categoryTotal = calculateCategoryExpenses(expense[0]);
    if (categoryTotal > largestValue) {
      largestValue = categoryTotal;
      largestCategory = expense[0];
    }
  }
  return largestCategory;
}

function addExpenseEntry(data) {
  expenseEntries.push(data);
  totalExpensesValue += data[1];
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

for (const [category, value] of expenseEntries) {
  totalExpensesValue += value;
}
