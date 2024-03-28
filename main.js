function calculateTax() {
  var income = parseFloat(document.getElementById("income").value);
  
  if (isNaN(income) || income < 0) {
      alert("Please enter a valid positive number for income.");
      return;
  }
  
  var taxData = calcTaxes(income);
  displayResults(taxData, income);
}

function calcTaxes(amount) {
  var tax = 0;

  if (amount > 80882) {
      tax = ((amount - 80882) * 0.48 + (80882 - 36967) * 0.45 + (36967 - 25075) * 0.37 + (25075 - 20322) * 0.35 + (20322 - 10732) * 0.285 + (10732 - 7112) * 0.23);
  } else if (amount > 36967) {
      tax = ((amount - 36967) * 0.45 + (36967 - 25075) * 0.37 + (25075 - 20322) * 0.35 + (20322 - 10732) * 0.285 + (10732 - 7112) * 0.23);
  } else if (amount > 25075) {
      tax = ((amount - 25075) * 0.37 + (25075 - 20322) * 0.35 + (20322 - 10732) * 0.285 + (10732 - 7112) * 0.23);
  } else if (amount > 20322) {
      tax = ((amount - 20322) * 0.35 + (20322 - 10732) * 0.285 + (10732 - 7112) * 0.23);
  } else if (amount > 10732) {
      tax = ((amount - 10732) * 0.285 + (10732 - 7112) * 0.23);
  } else if (amount > 7112) {
      tax = ((amount - 7112) * 0.23);
  } else {
      tax = 0;
  }

  var netIncome = amount - tax;
  var netIncomePerMonth = (netIncome / 12).toFixed(2);

  return {
      tax: tax.toFixed(2),
      netIncome: netIncome.toFixed(2),
      netIncomePerMonth: netIncomePerMonth
  };
}

function displayResults(taxData, income) {
  var taxRate = income > 0 ? ((taxData.tax / income) * 100).toFixed(1) : 0;
  
  document.getElementById("tax").textContent ="Net Income: "  + taxData.netIncome + " €" + "\nNet per Month: " + taxData.netIncomePerMonth + "€" + "\nTaxes Due: " + taxData.tax + " €\nEffective Tax rate: " + taxRate + "%";
}

window.onload = function () {
  document.getElementById("calculate").onclick = calculateTax;
};
