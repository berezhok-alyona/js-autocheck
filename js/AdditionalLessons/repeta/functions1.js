const add = function (x, y) {
  const total = x + y;
  console.log("Сумма = ", total);
  return total;
};
add(5, 6);
console.log("Сумма = ", add(3, 2));
const result = add(4, 5);
console.log("Результат суммы ", result);
add(1, 4);

const fnA = function (val) {
  return val >= 50 ? "More than 50" : "Less than 50";
};
console.log(fnA(70));
console.log(fnA(30));
console.log(fnA(50));

// Написать функцию, кот. возвращает сумму чисел
const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};
console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));
console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([100, 200, 300]));

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Password ${loginToFind} is found`
    : `Password ${loginToFind} is not found`;
};

console.log(
  findLogin(["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"], "avocod3r")
);
console.log(
  findLogin(
    ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"],
    "k1widab3st"
  )
);
console.log(
  findLogin(["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"], "jam4l")
);
console.log(
  findLogin(
    ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"],
    "poly1scute"
  )
);

const changeToSlug = function (title) {
  let slugString = "";
  return (slugString = title.toLowerCase().split(" ").join("-"));
};
console.log(changeToSlug("Top 10 benefits of React framework"));

// Array.from
const fn = function () {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

// ...rest
const fn1 = function (...args) {
  console.log(args);
};

fn1(1112, 13224, 13134);
fn1(1, 2, 3, 4, 5);
fn1(1, 2, 3, 4, 5, 6, 7);

// Задачи
// сложение произвольного кол-ва аргументов
const add1 = function (...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(add1(1, 2, 3));
console.log(add1(1, 2, 3, 4, 5, 6));
