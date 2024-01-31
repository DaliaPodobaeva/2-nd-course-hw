// Задание 1
let a = 10;
alert (a);
 a = 20;
alert (a);
// Задание 2
let year = "2007 - год выпуска первого айфона";
 alert (year);
//  Задание 3
let human = "Брендан Эйх - создатель JavaScript";
alert (human);
// Задание 4
let x = 10;
let y = 2;
let addition = x + y;
alert (addition);
let subtraction = x - y;
alert (subtraction);
let multiplication = x * y;
alert (multiplication);
let division = x / y;
alert (division);
// Задание 5
let result = 2**5;
alert (result);
// Задание 6
a = 9;
b = 2;
result =  a % b ;
alert (result)
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// Задание 8
let age = prompt('Сколько вам лет?');
alert (age);
// Задание 9.0
const user = {
    name: 'Jack',
    age: 4,
    isAdmin: true
}
// Задание 9.1
user['city of residence'] = true;
// Задание 9.2
user.age = 8;
// Задание 9.3
delete user['city of residence'];
// Задание 9.4
let info = prompt("Какую информацию хотите узнать o пользователе?", "name", "age", "isAdmin");
alert (user[info]);
// Задание 10
let person = prompt('Как вас зовут?')
alert (`Привет, ${person}!`)