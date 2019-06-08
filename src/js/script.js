let statBtn = document.getElementById('start'),
budgetValue=document.getElementsByClassName('budget-value')[0],
dayBudgetValue=document.getElementsByClassName('daybudget-value')[0],
levelValue=document.getElementsByClassName('level-value')[0],
expValue=document.getElementsByClassName('expenses-value')[0],
optExpValue=document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue=document.getElementsByClassName('income-value')[0],
monthSavingValue=document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue=document.getElementsByClassName('yearsavings-value')[0],
//-----------------------------------------------------------------------
expItem=document.getElementsByClassName('expenses-item'),
expBtn=document.getElementsByTagName('button')[0],
optExpBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
optExpItem = document.querySelectorAll('.optionalexpenses-item'),
//-----------------------------------------------------------------------
incomeItem=document.querySelector('.choose-income'),
savingsValue=document.querySelector('#savings'),
sumValue=document.querySelector('.choose-sum'),
percentValue=document.querySelector('choose-percent'),
yearValue=document.querySelector('year-value'),
monthValue=document.querySelector('month-value'),
dayValue=document.querySelector('day-value');
console.log(statBtn);
console.log(savingsValue);