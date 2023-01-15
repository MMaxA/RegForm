"use strict";

let user = "Maxim";
console.log("Hello, " + user);

//-----Homework-01--------
let money = 3000;
let profit = "веб-разработка";
let expenses = "Питание, бензин, ЖКХ, доп. расходы";
let purpose = 5000;
let period = 6;
let budgetDay = money / 30;

//-----Output----------
console.log(typeof money);
console.log(typeof profit);
console.log(expenses.length);
console.log("----------------------");
console.log(`Период равен ${period} месяцев. Цель - заработать ${purpose} долларов`);
console.log(`Дневной бюджет равен ${budgetDay}`);
