"use strict";

// lesson 6
console.log("----------------------------------");
console.log("lesson_06");
console.log("----------------------------------");

let money;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = prompt("money per month: ");
  } while (!isNumber(money));
};

start();

const appData = {
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 200000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt("possible expenses: ", "cinema, circus");
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("do you have deposit? (yes/no) ");

    let obligatoryExpenses = [];
    for (let i = 0; i < 2; i++) {
      let amount;
      obligatoryExpenses[i] = prompt("obligatory expenses: ");
      while (!isNumber(amount)) {
        amount = prompt("expenses amount: ");
      }
      appData.expenses[obligatoryExpenses[i]] = +amount;
    }
    console.log(appData.expenses);
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.round(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    appData.period = Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "high income";
    } else if (600 <= appData.budgetDay && appData.budgetDay < 1200) {
      return "middle income";
    } else if (0 <= appData.budgetDay && appData.budgetDay < 600) {
      return "low income";
    } else {
      return "something went wrong";
    }
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

let statusIncome = appData.getStatusIncome();

console.log("budget " + appData.budget);
console.log("----------------------------------");
console.log("possible expenses: ");
console.log(appData.addExpenses);
console.log("----------------------------------");
console.log("obligatory expenses: ");
console.log(appData.expenses);
console.log("----------------------------------");
console.log("expenses per month: " + (appData.budget - appData.budgetMonth));
console.log("----------------------------------");
console.log("mission: " + appData.mission);
console.log("get target month, period: " + appData.period);
console.log("----------------------------------");
console.log("status:  " + statusIncome);
