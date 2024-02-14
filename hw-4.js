let i = 1;
let n = 2;
while (i <= n) {
  console.log("Привет");
  i++;
}
// 2
let a = 1;
let b = 5;
while (a <= b) {
  console.log(a);
  a++;
}
// 3
a = 7;
b = 22;
while (a <= b) {
  console.log(a);
  a++;
}
// 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let salary in obj) {
  alert(`${salary} - зарплата ${obj[salary]} долларов`);
}
// 5
n = 1000
i = 0
while (n > 50){
  n /= 2;
  console.log (n);
  i++;
  let num = 5;
}
// 6
let friday = 4;
for (let day = friday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-e число. Необходимо подготовить отчет.`);
}
