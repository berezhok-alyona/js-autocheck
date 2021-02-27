// test16
const makeArray = function (firstArray, secondArray, maxLength) {
  const totalArray = firstArray.concat(secondArray);
  if (totalArray.length > maxLength) {
    return totalArray.slice(0, maxLength);
  }
  return totalArray;
};

console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3));
console.log(makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4));
console.log(makeArray(["Манго"], ["Аякс", "Челси", "Поли", "Хьюстон"], 3));
console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2));
console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4));
console.log((["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0));
// console.log(makeArray());

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// Тесты
// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) возвращает ['Манго', 'Поли', 'Аякс'].
// Вызов makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// Вызов makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3) возвращает ['Манго', 'Аякс', 'Челси'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) возвращает ['Земля', 'Юпитер'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) возвращает [].
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.

// test18
const calculateTotal = function (number) {
  // Пиши код ниже этой строки
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    // Дополни эту строку
    total += i;
  }
  return total;

  // Пиши код выше этой строки
};
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

// test19
const fruits = ["яблоко", "слива", "груша", "апельсин"];

for (let i = 0; i < fruits.length; i += 1) {
  // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

// test20
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

//test21
const findLongestWord = function (string) {
  const strSplit = string.split(" ");
  let longestWord = strSplit[0];
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

// test22 Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

// test32
function includes(array, value) {
  // Пиши код ниже этой строки
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
  // Пиши код выше этой строки
}
includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Юпитер");
includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Уран");
includes(["яблоко", "слива", "груша", "апельсин"], "слива");
includes(["яблоко", "слива", "груша", "апельсин"], "киви");
