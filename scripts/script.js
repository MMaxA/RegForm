"use strict";

// console.log("------- Homework-05 ----------");
// В задаче не совсем понятно определяется "Бюджет".
// Судя по всему, мы имеем дело со свободными средствами, которые остались после учета доп.доходов и расходов.
// Это не совсем бюджет, это - оставшиеся средства, прибыль или сбережения. Комментарии в консоль выводил исходя из этой логики.

let money = prompt("Ваш месячный доход?", 0);
while(isNaN(money)) {
  money = prompt("Необходимо ввести число! Ваш месячный доход?", 0);
}

let profit = prompt("Введите планируемые статьи доп. доходов:", "Веб-разработка, депозит в банке, фриланс");
let extraMoney = prompt(`Введите сумму доходов за ваши доп.работы: ${profit}`, 0);
while(isNaN(extraMoney)) {
  extraMoney = prompt(`Необходимо ввести число! Введите сумму доходов за ваши доп.работы: ${profit}`, 0);
}

let expenses = prompt("Перечислите обязательные расходы за рассчитываемый период (через запятую)", "Вода, бензин");
let amount = prompt(`Во сколько обойдутся обязательные статьи расходов: ${expenses}?`, 0);
while(isNaN(amount)) {
  amount = prompt(`Необходимо ввести число! Во сколько обойдутся обязательные статьи расходов: ${expenses}?`, 0);
}

let purpose = prompt("Сколько средств Вы бы хотели накопить?");
while(isNaN(purpose)) {
  purpose = prompt("Необходимо ввести число! Сколько средств Вы бы хотели накопить?");
}

//функция расчета свободных средств
function getAccumulatedIncome(money, extraMoney, amount) {
  return (Number(money) + Number(extraMoney)) - Number(amount);
}

//функция расчета количества месяцев до достижения цели
function getTargetMonth(income) {
    if(income > 0){
      return `Цель будет достигнута через ${Math.ceil(purpose / income)} месяца`;
    } else return "Цель не будет достигнута!";
}

//получаем все необходимые переменные для вывода в консоль
const accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);
const targetMonth = getTargetMonth(accumulatedIncome);
const budgetDay = Math.floor(accumulatedIncome / 30);

//-----Output----------
console.log(`${accumulatedIncome > 0 ? `Ваши свободные средства на месяц с учетом расходов составляют: ${accumulatedIncome}` :
  accumulatedIncome === 0 ? `Ваши доходы равны расходам. Средств для накопления не осталось` :
  `Вы все истратили, копить нечего :) Вы еще и в минусе на ${accumulatedIncome} руб`}`);

console.log(`Ваша цель - накопить ${purpose} рублей. ${targetMonth}`);

console.log(`${budgetDay > 0 ? `Накоплено в день: ${budgetDay} руб` : 
  budgetDay === 0 ? `Ежедневных накоплений нет` : 
  `Вы каждый день уходите в минус на ${budgetDay} руб`}`);