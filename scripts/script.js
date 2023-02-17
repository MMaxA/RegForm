"use strict";

//создаем переменную для хранения массива пользователей
let users = [];

document.addEventListener("DOMContentLoaded", function () {

  let formEnter = document.querySelector("#enterform");
  let formReg = document.querySelector("#regform");
  let view = document.querySelector("#view");
  let view1 = document.querySelector("#view1");

  // Функция переключение между формами
  function handleClick(e) {
    if (!formEnter.classList.contains("unvisible")) {
      formEnter.classList.add("unvisible");
      formReg.classList.remove("unvisible");
    } else if (formEnter.classList.contains("unvisible")) {
      formEnter.classList.remove("unvisible");
      formReg.classList.add("unvisible");
    }
  }
  view.addEventListener("click", handleClick);
  view1.addEventListener("click", handleClick);

  //Функции добавления, удаления класса Ошибки и проверки Email
  function formAddError(input, er) {
    input.parentElement.classList.add("error");
    input.classList.add("error");
    er.textContent = "Пожалуйста, заполните поле...";
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
  }
  function emailTest(input) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      input.value
    );
  }

  //Функция валидации форм
  function formValidation(form) {
    let error = 0;
    let reqFields = form.querySelectorAll(".required");
    let formErrors = form.querySelectorAll(".form__error");

    for (let index = 0; index < reqFields.length; index++) {
      const input = reqFields[index];
      const er = formErrors[index];
      er.textContent = "";
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (!emailTest(input)) {
          formAddError(input, er);
          er.textContent = "Пожалуйста, введите валидный email...";
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input, er);
        error++;
      } else if (input.value === "") {
        formAddError(input, er);
        error++;
      }
    }
    return error;
  }

  // Отправка формы Входа
  let btnEnter = document.querySelector("#btnEnter");

  btnEnter.addEventListener("click", (e) => {
    e.preventDefault();
    let enterForm = document.getElementById("enterform");
    let error = formValidation(enterForm);
    let formEmail = enterForm.querySelector("#formEmail");
    let formPass = enterForm.querySelector("#formPass");

    try {
      if (error === 0) {
        // let users = [];
        users = JSON.parse(localStorage.getItem("users"));
        if (users.find((user) => user.email == `${formEmail.value}` && user.password == `${formPass.value}`)) {
          window.location.href = "main.html";
        } else{
          alert("Логин или пароль введены не верно...");
        }
        
      } else {
        alert("Пожалуйста, заполните обязательные поля :)");
      }
    } catch (e) {
      console.log(e);
    }
  });

  // Отправка формы Регистрации
  let btnReg = document.querySelector("#btnReg");

  btnReg.addEventListener("click", (e) => {
    e.preventDefault();
    let regForm = document.getElementById("regform");
    let error = formValidation(regForm);
    let formEmail = regForm.querySelector("#formEmail");
    let formPass = regForm.querySelector("#formPass");

    try {
      if (error === 0) {
        // let users = [];
        users = JSON.parse(localStorage.getItem("users"));
        if ((users.filter((user) => user.email == formEmail.value).length == 0)) {
          let userObj = {
            email: `${formEmail.value}`,
            password: `${formPass.value}`,
          };
          users.push(userObj);
          localStorage.setItem("users", JSON.stringify(users));
          alert("Регистрация прошла успешно :)");
        } else {
          alert("Такой пользователь уже есть в базе");
        }
      } else {
        alert("Пожалуйста, заполните обязательные поля :)");
      }
    } catch (e) {
      console.log(e);
    }
  });
});
