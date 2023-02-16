function calculateExpenses() {
  const income = parseFloat(document.getElementById("income").value);
  const food = parseFloat(document.getElementById("food").value);
  const rent = parseFloat(document.getElementById("rent").value);
  const clothes = parseFloat(document.getElementById("clothes").value);

  if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert("Input should be a valid number");
    return;
  }

  const expense = food + rent + clothes;
  const balance = income - expense;
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
}

function calculateSavings() {
  const income = document.getElementById("income").value;
  const savePercentage = document.getElementById("save").value;
  if (isNaN(income) || isNaN(savePercentage)) {
    alert("Input should be a valid number");
    return;
  }
  if (savePercentage < 0 || savePercentage > 100) {
    alert("Percentage should be between 0 and 100");
    return;
  }
  const savingAmount = ((savePercentage / 100) * income).toFixed(2);
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;
  if (savingAmount > balance) {
    alert("Saving amount is greater than balance");
  } else {
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
}

document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateExpenses);
document
  .getElementById("savings-btn")
  .addEventListener("click", calculateSavings);
