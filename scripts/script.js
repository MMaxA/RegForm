"use strict";

console.log("------- Homework-02 ----------");
let user = prompt("Как Вас зовут?");
console.log("Hello, " + user);

//-----InputData--------
let money = prompt("Ваш месячный доход?", 0);
let expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "Вода, бензин"
);
let amount = prompt(
  "Во сколько обойдуться обязательные статьи расходов?",
  3000
);
let deposit = confirm("Есть ли у Вас счет в банке?");
let purpose = prompt("Сколько средств Вы бы хотели накопить?");

let budgetMonth = money - amount;
let period = Math.ceil(purpose / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);

//-----Output----------
console.log(`Финансовая цель - заработать ${purpose} рублей`);
console.log(`Бюджет на месяц - ${budgetMonth}`);
console.log(`Обязательные расходы: ${amount}`);
console.log(`Месяцев до достижения финансовой цели: ${period}`);
console.log(`Дневной бюджет, рублей: ${budgetDay}`);

console.log("--------Через if..else if-----------");
if (budgetDay > 60000) {
  console.log("У Вас высокий уровень дохода");
} else if (30000 < budgetDay <= 60000) {
  console.log("У Вас средний уровень дохода");
} else if (0 < budgetDay <= 30000) {
  console.log("К сожалению, Ваш уровень дохода ниже среднего");
} else if (budgetDay <= 0) {
  console.log("Упс, что-то пошло не так...");
} else {
  console.log("Значения вне интервала оценивания");
}

console.log("------Через тернарный оператор------");
console.log(
    budgetDay > 60000 ? "У Вас высокий уровень дохода" : 
    30000 < budgetDay <= 60000 ? "У Вас средний уровень дохода" : 
    0 < budgetDay <= 30000 ? "К сожалению, Ваш уровень дохода ниже среднего" : 
    budgetDay < 0 ? "Упс, что-то пошло не так..." : 
    "Значения вне интервала оценивания"
);
