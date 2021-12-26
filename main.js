/* 

Taxable income (EUR*)	Tax rate (%)	Deductible amount (EUR)
Over	Not over      %     Deductible
0	    7,112	    14.5	0  
7,112	10,732	    23.0	604.54
10,732	20,322	    28.5	1,194.80
20,322	25,075	    35.0	2,515.63
25,075	36,967	    37.0	3,017.27
36,967	80,882	    45.0	5,974.54
80,882	infinite 	48.0	8,401.21

*/

var calculateTax = function() {
  var income = parseFloat(document.getElementById("income").value);
  document.getElementById("tax").value = calcTaxes(income);
  // document.getElementById("taxes").value = calcTaxes(income);
  console.log(tax);
  function calcTaxes(amount){
  var calculate = 0;
  
  // ABOVE 80882€
  if(amount > 80882){
      tax = ((amount - 80882)*.48 + (80882-36967)*.45 + (36967-25075)*.37 + (25075-20322)*.35 + (20322-10732)*.285 + (10732-7112)*.23).toFixed(2);
      var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
      percentagebracket1 = ((7112/amount)*100).toFixed(1);
      percentagebracket2 = ((10732/amount)*100).toFixed(1);
      percentagebracket3 = ((20322/amount)*100).toFixed(1);
      percentagebracket4 = ((25075/amount)*100).toFixed(1);
      percentagebracket5 = (((amount-80882)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k, ' + percentagebracket2 + '% between €10,001 to €35k, ' + percentagebracket3 + '% between €35,001 to €100k and ' + percentagebracket4 + '% across the €100k+ bracket';
      taxband1 = 0;
      taxband2 = ((10732-7112)*.23).toFixed(2);
      taxband3 = ((20322-10732)*.285).toFixed(2);
      taxband4 = ((25075-20322)*.35).toFixed(2);
      taxband5 = ((36967-25075)*.37).toFixed(2);
      taxband6 = ((80882-36967)*.45).toFixed(2);
      taxband7 = ((amount - 80882)*.48).toFixed(2);
      taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%, €' + taxband2 + ' at 20%, €' + taxband3 + ' at 40% and €' + taxband4 + ' at 50%.';
  }
  // ABOVE  36967€
  else if( amount > 36967){
      tax = ((amount - 36967)*.45 + (36967-25075)*.37 + (25075-20322)*.35 + (20322-10732)*.285 + (10732-7112)*.23).toFixed(2);
      var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
      percentagebracket1 = ((20322/amount)*100).toFixed(1);
      percentagebracket2 = ((25075/amount)*100).toFixed(1);
      percentagebracket3 = (((amount-36967)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k, ' + percentagebracket2 + '% between €10,001 to €35k and ' + percentagebracket3 + '% between €35,001 to €100k';
      taxband1 = 0;
      taxband2 = ((10732-7112)*.23).toFixed(2);
      taxband3 = ((20322-10732)*.285).toFixed(2);
      taxband4 = ((25075-20322)*.35).toFixed(2);
      taxband5 = ((36967-25075)*.37).toFixed(2);
      taxband6 = ((amount - 36967)*.45).toFixed(2);
      taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%, €' + taxband2 + ' at 20% and €' + taxband3 + ' at 40%.';
  }
// ABOVE  25075€
  else if( amount > 25075){
    tax = ((amount - 25075)*.37 + (25075-20322)*.35 + (20322-10732)*.285 + (10732-7112)*.23).toFixed(2);
    var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
    salaryaftertax = (income - tax).toFixed(2);
    salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
    percentagebracket1 = ((7112/amount)*100).toFixed(1);
    percentagebracket2 = ((10372/amount)*100).toFixed(1);
    percentagebracket3 = ((20322/amount)*100).toFixed(1);
    percentagebracket4 = ((25075/amount)*100).toFixed(1);
    percentagebracket5 = (((amount-25075)/amount)*100).toFixed(1);
    percentagebracketPrint = '                   Brackets: ' + percentagebracket1 + '% between €0 to €10k, ' + percentagebracket2 + '% between €10,001 to €35k and ' + percentagebracket3 + '% between €35,001 to €100k';
    taxband1 = 0;
    taxband2 = ((10732-7112)*.23).toFixed(2);
    taxband2 = ((20322-10732)*.285).toFixed(2);
    taxband3 = ((25075-20322)*.35).toFixed(2);
    taxband4 = ((amount-25075)*.37).toFixed(2);
    taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%, €' + taxband2 + ' at 20% and €' + taxband3 + ' at 40%.';
}
// ABOVE  20322€
else if( amount > 20322){
  tax = ((amount - 20322)*.35 + (20322-10732)*.285 + (10732-7112)*.23).toFixed(2);
  var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
  salaryaftertax = (income - tax).toFixed(2);
  salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
  percentagebracket1 = ((7112/amount)*100).toFixed(1);
  percentagebracket2 = ((10372/amount)*100).toFixed(1);
  percentagebracket3 = ((20322/amount)*100).toFixed(1);
  percentagebracket4 = (((amount-20322)/amount)*100).toFixed(1);
  percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k, ' + percentagebracket2 + '% between €10,001 to €35k and ' + percentagebracket3 + '% between €35,001 to €100k';
  taxband1 = 0;
  taxband2 = ((10732-7112)*.23).toFixed(2);
  taxband3 = ((20322-10732)*.285).toFixed(2);
  taxband4 = ((amount-20322)*.35).toFixed(2);
  
}
// ABOVE  10732€
  else if(amount > 10732){
    tax = ((amount - 10732)*.285 + (10732-7112)*.23).toFixed(2);
      var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
      percentagebracket1 = ((10732/amount)*100).toFixed(1);
      percentagebracket2 = (((amount-10732)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €7112k and ' + percentagebracket2 + '% between €10,001 to €35k';
      taxband1 = 0;
      taxband2 = ((10732-7112)*.23).toFixed(2);
      taxband3 = ((amount-10732)*.285).toFixed(2);
      var taxbandPrint = (taxPrint - salaryaftertaxPrint);
  }
  // ABOVE  7112€
  else if( amount > 7112){
    tax = ((amount - 7112)*.23 + (7112-0)*.0).toFixed(2);
      var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
    salaryaftertax = (income - tax).toFixed(2);
    salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
    percentagebracket1 = ((7112/amount)*100).toFixed(1);
    percentagebracket2 = (((amount-7112)/amount)*100).toFixed(1);
    percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €7112 and ' + percentagebracket2 + '% between €7112 to €20322';
    taxband1 = 0;
    taxband2 = ((7112-0)*.0).toFixed(2);
    taxband3 = ((amount-7112)*.0).toFixed(2);
    taxbandPrint = 'You should pay 0% taxes';
    
}
  else if(amount > 0){
       tax = amount*0;
       var taxPrint = '\nTaxes Due: ' + tax + ' €' +'\nTax rate% ' + (tax / amount * 100).toFixed(1);
       salaryaftertax = (income - tax).toFixed(2);
       salaryaftertaxPrint = 'Net Income: ' + salaryaftertax + ' €';
       percentagebracket1 = 100;
       percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €7112';
       taxband1 = 0;
       taxbandPrint = 'You should pay 0% taxes';
  }
  else {
  }
  return [salaryaftertaxPrint + taxPrint];
}}

window.onload = function () {
  document.getElementById("calculate").onclick = calculateTax, calculateRefund;
}
