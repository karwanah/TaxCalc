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
    console.log(tax);
    function calcTaxes(amount){
    var calculate = 0;
    if(amount > 7112){
        tax = ((amount - 7112)*.50 + (7112-10732)*.40 + (10732-7112)*.23).toFixed(2);
        taxPrint = 'Tax Payable: €' + tax;
        salaryaftertax = (income - tax).toFixed(2);
        salaryaftertaxPrint = ' Salary After Tax: €' + salaryaftertax;
        percentagebracket1 = ((10000/amount)*100).toFixed(1);
        percentagebracket2 = ((24999/amount)*100).toFixed(1);
        percentagebracket3 = ((64999/amount)*100).toFixed(1);
        percentagebracket4 = (((amount-100000)/amount)*100).toFixed(1);
        percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €7,112, ' + percentagebracket2 + '% between €10,732 to €20,322k, ' + percentagebracket3 + '% between €20,322 to €25,075 and ' + percentagebracket4 + '% across the €100k+ bracket';
        taxband1 = 0;
        taxband2 = ((10732-7112)*.20).toFixed(2);
        taxband3 = ((100000-10732)*.40).toFixed(2);
        taxband4 = ((amount - 100000)*.50).toFixed(2);
        taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%, €' + taxband2 + ' at 20%, €' + taxband3 + ' at 40% and €' + taxband4 + ' at 50%.';
    }
    else if( amount > 10732){
        tax = ((amount - 10732)*.40 + (10732-7112)*.20).toFixed(2);
        taxPrint = 'Tax Payable: €' + tax;
        salaryaftertax = (income - tax).toFixed(2);
        salaryaftertaxPrint = ' Salary After Tax: €' + salaryaftertax;
        percentagebracket1 = ((10000/amount)*100).toFixed(1);
        percentagebracket2 = ((24999/amount)*100).toFixed(1);
        percentagebracket3 = (((amount-10732)/amount)*100).toFixed(1);
        percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k, ' + percentagebracket2 + '% between €10,001 to €35k and ' + percentagebracket3 + '% between €35,001 to €100k';
        taxband1 = 0;
        taxband2 = ((10732-7112)*.20).toFixed(2);
        taxband3 = ((amount-10732)*.40).toFixed(2);
        taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%, €' + taxband2 + ' at 20% and €' + taxband3 + ' at 40%.';
    }
    else if(amount > 7112){
        tax = ((amount - 7112)*.20).toFixed(2);
        taxPrint = 'Tax Payable: €' + tax;
        salaryaftertax = (income - tax).toFixed(2);
        salaryaftertaxPrint = ' Salary After Tax: €' + salaryaftertax;
        percentagebracket1 = ((10000/amount)*100).toFixed(1);
        percentagebracket2 = (((amount-7112)/amount)*100).toFixed(1);
        percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k and ' + percentagebracket2 + '% between €10,001 to €35k';
        taxband1 = 0;
        taxband2 = ((amount-7112)*.20).toFixed(2);
        taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0% and €' + taxband2 + ' at 20%.';
    }
    else if(amount > 0){
         tax = amount*0;
         taxPrint = 'Tax Payable: €' + tax;
         salaryaftertax = (income - tax).toFixed(2);
         salaryaftertaxPrint = ' Salary After Tax: €' + salaryaftertax;
         percentagebracket1 = 100;
         percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between €0 to €10k';
         taxband1 = 0;
         taxbandPrint = ' and, here is your breakdown of tax paid at each band: €' + taxband1 + ' at 0%.';
    }
    else {
      taxPrint = 'n/a';
      salaryaftertaxPrint = ' n/a';
      percentagebracketPrint = ' n/a';
      taxbandPrint = ' n/a'
    }
    return [taxPrint, salaryaftertaxPrint, percentagebracketPrint, taxbandPrint];
  }}
  
  window.onload = function () {
    document.getElementById("calculate").onclick = calculateTax;
  }
