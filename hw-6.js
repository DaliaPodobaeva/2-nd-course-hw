// // Задание 1
// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//   console.log(numbs[i]);
//   if (numbs[i] === 10) break;
// }
// // Задание 2
// console.log(numbs.indexOf(4));
// // Задание 3
// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));
// // Задание 4
// let newArr = [];
// for (let i = 0; i < 3; i++) {
//   newArr[i] = [];

//   for (let j = 0; j < 3; j++) {
//     newArr[i].push(1);
//   }
// }
// console.log(newArr);
// // Задание 5
// let h = [1, 1, 1];
// h.push(2, 2, 2);
// console.log(h);
// // Задание 6
// const a = [9, 8, 7, "a", 6, 5];
// a.sort();
// a.pop();
// console.log(a);
// // Задание 7
// let answer = prompt("Угадай число");
// if (a.includes(Number(answer))) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }
// // Задание 8
// const b = "abcdef";
// console.log(b.split("").reverse().join(""));
// // Задание 9
// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let flattened = array.flat();
// console.log(flattened);
// // Задание 10
// let numbers = [3, 7, 1, 9, 5, 4, 2, 8, 6, 10];
// for (let i = 0; i < numbers.length - 1; i++) {
//   console.log(numbers[i] + numbers[i + 1]);
// }
// // Задание 11
// function squares(array) {
//   const squaredArray = array.map((num) => num * num);
//   return squaredArray;
// }
// // Задание 12
// function getMap(array) {
//   return array.map((el) => el.length);
// }
// // Задание 13
// function filterPositive(array) {
//   return array.filter((value) => value < 0);
// }
// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));
