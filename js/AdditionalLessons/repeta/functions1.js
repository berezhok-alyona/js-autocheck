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
