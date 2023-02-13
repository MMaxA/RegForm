"use strict";

console.log("------- Homework-06 ----------");
// Получение данных с сервера

const url = 'https://reqres.in/api/users?per_page=12';

async function getData() {
    try {
        console.log('-----------');
        console.log('Пункт 1: Получение данных');
        const response = await fetch(url);
        const data = await response.json();
        let userList = {};
        userList = data.data;
        console.log(userList);

        console.log('-----------');
        console.log('Пункт 2: Фамилии пользователей');

        userList.forEach((item, index, array) => {
            console.log(item.last_name);
        })

        console.log('-----------');
        console.log('Пункт 3: Все фамилии на F');

        userList.forEach((item, index, array) => {
            if(item.last_name[0] === "F") {
                console.log(item.last_name);
            }
        });

        console.log('-----------');
        console.log('Пункт 4:');
        const newUserList = userList.reduce((acc, user) => {
            acc.push(`${user.first_name} ${user.last_name}`);
            return acc;
        }, []);

        console.log(`Наша база содержит данные следующих пользователей: ${newUserList.join(", ")}.`);

        console.log('-----------');
        console.log('Пункт 5: Вывод всех ключей объекта');

        Object.keys(userList[0]).forEach((key) => {
            console.log(key);
        });

        return data;
    } catch (e) {
        console.log(e);
    }
}

getData();
