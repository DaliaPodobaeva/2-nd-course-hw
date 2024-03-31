// Задание 1
let people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];
people.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
console.log(people);
// Задание 2
function isPositive(number) {
  return number > 0;
}
function isMale(person) {
  return person.gender === "male";
}
function filter(arr, ruleFunction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}
people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));
console.log(filter([3, -4, 1, 9], isPositive));
// Задание 3
let counter = 0;
const interval = setInterval(() => {
  if (counter >= 10) {
    clearInterval(interval);
    console.log("30 секунд прошло");
  } else {
    console.log(new Date());
    counter++;
  }
}, 3000);
// Задание 4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}
delayForSecond(function () {
  console.log("Привет, Глеб!");
});
// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'))