// // Задание 1
// let string = "js";
// console.log(string.toUpperCase());
// // Задание 2
// function searchStart(arr, str) {
//   return arr.filter((el) => el.toLowerCase(str).startsWith(str.toLowerCase()));
// }
// console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
// console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
// console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));
// // Задание 3
// let number = 32.58884;
// let floorNumber = Math.floor(number);
// console.log(floorNumber);
// let ceilNumber = Math.ceil(number);
// console.log(ceilNumber);
// let roundNumber = Math.round(number);
// console.log(roundNumber);
// // Задание 4
// const numbers = [52, 53, 49, 77, 21, 32];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));
// // Задание 5
// function getRandomInt(minValue, maxValue) {
//   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(1, 10));
// // Задание 6
// function random(num) {
//   let arr = [];
//   for (let i = 0; i < num / 2; i++) {
//     arr.push(Math.floor(Math.random() * num));
//   }
//   return arr;
// }
// console.log(random(8));
// // Задание 7
// function getRandomInt(minValue, maxValue) {
//   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(5, 9));
// // Задание 8
// let date = new Date();
// console.log(date);
// // Задание 9
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toLocaleString());
// // Задание 10
// function getTime(fullDate) {
// let days = [
//   "воскресенье",
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
// ];
// let months = [
//   "январь",
//   "февраль",
//   "март",
//   "апрель",
//   "май",
//   "июнь",
//   "июль",
//   "август",
//   "сентябрь",
//   "октябрь",
//   "ноябрь",
//   "декабрь",
// ];
//     let myDate = new Date();
// return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}
// Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
// }
// console.log(getTime(2024, 2, 2));
// // Задание 11
// function rememberFruits() {
//   let fruits = [
//     "Яблоко",
//     "Груша",
//     "Дыня",
//     "Виноград",
//     "Персик",
//     "Апельсин",
//     "Мандарин",
//   ];
//   fruits.sort(() => Math.random() - 0.5);
//   alert(fruits);
//   let firstFruit = prompt("Чему равнялся первый элемент массива?");
//   let lastFruit = prompt("Чему равнялся последний элемент массива?");
//   if (firstFruit && lastFruit) {
//     if (
//       firstFruit.toLowerCase() === fruits[0].toLowerCase() &&
//       lastFruit.toLowerCase() === fruits[fruits.length - 1].toLowerCase()
//     ) {
//       alert("Поздравляем!Вы всё угадали!");
//     } else if (
//       firstFruit.toLowerCase() === fruits[0].toLowerCase() ||
//       lastFruit.toLowerCase() === fruits[fruits.length - 1].toLowerCase()
//     ) {
//       alert("Вы были близки к победе!");
//     } else {
//       alert("К сожалению, вы не угадали.");
//     }
//   } else {
//     alert('Вы ничего не ввели.');
//   }
// }
