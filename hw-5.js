// Задание1
let puzzle = (a, b) => {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};
console.log(puzzle(2, 9));
console.log(puzzle(6, 1));
// Задание2
let parity = (c) => {
  if (c % 2 == 0) {
    return "Число чётное";
  } else {
    return "Число нечётное";
  }
};
console.log(parity(4));
console.log(parity(7));
// Задание3
let square = (a) => {
  console.log(a * a);
};
square(3);

let square2 = (b) => {
  return b * b;
};
console.log(square2(7));
// Задание4
let checkAge = (age) => {
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age <= 12) {
    console.log("Привет, друг!");
  } else {
    console.log("Добро пожаловать!");
  }
};
checkAge(prompt("Введите ваш возраст"));
// Задание5
let n = prompt("Введете первое число");
let m = prompt("Введете второе число");
function number(n, m) {
  if (isNaN(n) || isNaN(m)) {
    return "Одно или оба значения не являются числом";
  } else {
    return n * m;
  }
}
console.log(number(n, m));
// Задание6
let userNumber = prompt("Введите число");
function checkNumber(userNumber) {
  if (userNumber >= 0 && userNumber <= 10) {
    return `${userNumber} в кубе равняется ${userNumber ** 3}`;
  } else if (userNumber > 10) {
    return "Вы ввели слишком большое число";
  } else {
    return "Переданный параметр не является числом";
  }
}
console.log(checkNumber(userNumber));
// Задание7
function getRectangleArea() {
  return this.radius * 3.14;
}
function getRectanglePerimeter() {
  return this.radius * 2 * 3.14;
}
const circle1 = {
  radius: 9,

  getArea: getRectangleArea,
  getPerimeter: getRectangleArea,
};
const circle2 = {
  radius: 6,

  getArea: getRectangleArea,
  getPerimeter: getRectangleArea,
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
// Задание 8
function season() {
let month = prompt('Введите номер месяца');
  if (month >= 1 && month <= 2 || month ===12 ) {
    console.log ('Зима');
  } else if (month >= 3 && month <= 5) {
    console.log ('Весна');
  } else if (month >= 6 && month <= 8) {
    console.log ('Лето');
} else if (month >= 9 && month <= 11) {
  console.log ('Осень');
} else {
  console.log ('Ты ввел что-то не то, попробуй еще раз')
}
}
