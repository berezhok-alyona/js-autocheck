// test 27
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];
  for (const num of numbers) {
    const number = num;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// test28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// test29
const getEvenNumbers = function (start, end) {
  // Пиши код ниже этой строки
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.

// test31
function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
findNumber(2, 6, 5);
findNumber(8, 17, 3);
findNumber(6, 9, 4);
findNumber(16, 35, 7);
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.
