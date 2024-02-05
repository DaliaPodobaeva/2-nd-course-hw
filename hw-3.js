// // Задание 1
// let password = 'пароль';
// let issue = prompt('Введите пароль');
// if (password === 'пароль') {
//     alert ("Пароль введен верно")
// } else {
//     alert("Пароль введен неправильно")
// }
// Задание 2
let c = 0;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}
c = 10;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}
c = -3;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}
c = 2;
if (c > 0 && c < 10) {
  console.log("верно");
} else {
  console.log("неверно");
}
// Задание 3
let d = 90;
let e = 150;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
// Задание 4
let a = "2";
let b = "3";
alert(+a + +b);
// Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
  case '1':
    console.log('зима');
    break;
  case '2':
    console.log('зима');
    break;
  case '3':
    console.log('весна');
    break;
  case '4':
    console.log('весна');
    break;
  case '5':
    console.log('весна');
    break;
  case '6':
    console.log('лето');
    break;
  case '7':
    console.log('лето');
    break;
  case '8':
    console.log('лето');
    break;
  case '9':
    console.log('осень');
    break;
  case '10':
    console.log('осень');
    break;
  case '11':
    console.log('осень');
    break;
  case '12':
    console.log('зима');
    break;

  default:
    console.log ('Ввел что-то не то')
    break;
}

