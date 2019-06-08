'use strict';
let startBtn = document.getElementById('start'),
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
yearValue=document.querySelector('.year-value'),
monthValue=document.querySelector('.month-value'),
dayValue=document.querySelector('.day-value');
//------------------------------------------------------------------------
startBtn.addEventListener('click',function() {
    time = prompt("Date YYYY-MM-DD");
    money = +prompt("Till month: ");
    console.log("money: "+money+"\ntime: "+time);
    while(isNaN(money) || money==="" || money==null){
    money = +prompt("Till month",'');
    }
    appData.budjet=money;
    appData.timeData=time;
    budgetValue.textContent=money.toFixed();
    yearValue.value=new Date(Date.parse(time)).getFullYear();
    monthValue.value=new Date(Date.parse(time)).getMonth()+1;
    dayValue.value=new Date(Date.parse(time)).getDay();
});
var money,time;
var appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings : true,
    choseExpenses: function(){
            for(let i=0;i<2;i++){
                let tempStrForName=prompt("Name of minuses"),
                mSum=prompt("sum",0);
                if((typeof(tempStrForName))==='string' && (typeof(tempStrForName)!=null)){
                appData.expenses[tempStrForName]=mSum;
                }
            }
    },
    detectDayBudjet: function(){
        appData.budjet=money;
        appData.moneyPerDay=(appData.budjet/30).toFixed(1);
        alert("Ежедневный бюджет" +appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay<=500) {
            console.log("Low level");
        } else if((appData.moneyPerDay)>500 && (appData.moneyPerDay)<5000){
            console.log("Medium level");
        }else if((appData.moneyPerDay)>5000){
            console.log("High level");
        }
    },
    checkSavings: function(){
        if(appData.moneyPerDay<=500) {
            console.log("Low level");
        } else if((appData.moneyPerDay)>500 && (appData.moneyPerDay)<5000){
            console.log("Medium level");
        }else if((appData.moneyPerDay)>5000){
            console.log("High level");
        }
    },
    choseOptExpenses: function(){
        for(let i=0;i<3;i++){
            let mSum=+prompt("Optional Exp sum");
            let counter=1;
            if((mSum!=null) && (mSum!="")){ 
             appData.optionalExpenses[counter]=mSum;
             counter++;
            }
        }
    },
    choseIncome:function(){
        
        let items = prompt("Ways of aditional incomes?","");
        while((typeof(items)!='string') || (typeof(items)==null) || (items==="")){
            items = prompt("Ways of aditional incomes?",""); 
        }
        appData.income=items.split(', ');
        appData.income.sort();
        appData.income.forEach(function(item, i, arr) {
            alert( (i+1) + ": " + item );
          });
    },

    info: function(){
        console.log("we have a such info:");
        for(let key in appData){
            console.log(appData[key]);
        }
    }

}


    
