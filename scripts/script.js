"use strict";

// console.log("------- Homework-03 ----------");

let money = prompt("Ваш месячный доход?", 0);
let profit = prompt("Введите планируемые статьи доп. доходов:", "Веб-разработка, депозит в банке, фриланс");
let extraMoney = prompt(`Введите сумму доходов за ваши доп.работы: ${profit}`, 0);

let expenses = prompt("Перечислите обязательные расходы за рассчитываемый период (через запятую)", "Вода, бензин");
let amount = prompt(`Во сколько обойдутся обязательные статьи расходов: ${expenses}?`, 0);

let purpose = prompt("Сколько средств Вы бы хотели накопить?");

function getAccumulatedIncome() {
  return (Number(money) + Number(extraMoney)) - Number(amount);
}
const accumulatedIncome = getAccumulatedIncome();

function getTargetMonth() {
  return Math.ceil(purpose / accumulatedIncome);
}

let budgetDay = Math.floor(accumulatedIncome / 30);

// //-----Output----------
console.log(`Ваш бюджет на месяц с учетом расходов составляет:`, accumulatedIncome);
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ` месяца`);
console.log(`Дневной бюджет: ${budgetDay}`);