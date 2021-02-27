const calculateEngravingPrice = function (message, pricePerWord) {
  // Пиши код ниже этой строки
  let words;
  words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;

  // Пиши код выше этой строки
};
console.log(calculateEngravingPrice("JavaScript у меня в крови", 10));
console.log(calculateEngravingPrice("JavaScript у меня в крови", 20));
console.log(
  calculateEngravingPrice("Веб-разработка это творческая работа", 40)
);
console.log(
  calculateEngravingPrice("Веб-разработка это творческая работа", 20)
);

// test12
const makeStringFromArray = function (array, delimeter) {
  let string;
  string = array.join(delimeter);
  return string;
};
console.log(makeStringFromArray(["Манго", "спешит", "на", "поезд"], " "));
console.log(makeStringFromArray(["М", "а", "н", "г", "о"], ""));
console.log(makeStringFromArray(["лучшее", "за", "неделю"], "_"));

// test13
const slugify = function (title) {
  let words;
  words = title.split(" ").join("-").toLowerCase();

  return words;
};
console.log(slugify("Массивы для новичков"));
console.log(slugify("Английский для разработчика"));
console.log(slugify("Десять секретов JavaScript"));
console.log(slugify("Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ"));

// // Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
// Тесты
// Объявлена функция slugify(title).
// Вызов slugify('Массивы для новичков') возвращает 'массивы-для-новичков'.
// Вызов slugify('Английский для разработчика') возвращает 'английский-для-разработчика'.
// Вызов slugify('Десять секретов JavaScript') возвращает 'десять-секретов-javascript'.
// Вызов slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ') возвращает 'как-стать-junior-разработчиком-за-две-недели'.

// test14
const fruits = ["яблоко", "слива", "груша", "апельсин", "банан"];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const lastElementIndex = fruits.length - 1;
const nonExtremeEls = fruits.slice(1, lastElementIndex);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.
// Тесты
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин', 'банан'].
// Объявлена переменная firstTwoEls
// Значение переменной firstTwoEls это массив ['яблоко', 'слива'].
// Объявлена переменная nonExtremeEls
// Значение переменной nonExtremeEls это массив ['слива', 'груша', 'апельсин'].
// Объявлена переменная lastThreeEls.
// Значение переменной lastThreeEls это массив ['груша', 'апельсин', 'банан'].
// Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами.

// test15
const oldClients = ["Манго", "Аякс", "Поли", "Киви"];
const newClients = ["Персик", "Хьюстон"];

const allClients = oldClients.concat(newClients);
console.log(oldClients);
console.log(newClients);
console.log(allClients);

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// Тесты
// Объявлена переменная oldClients.
// Значение переменной oldClients это массив ['Манго', 'Аякс', 'Поли', 'Киви'].
// Объявлена переменная newClients.
// Значение переменной newClients это массив ['Персик', 'Хьюстон'].
// Объявлена переменная allClients.
// Значение переменной allClients это массив ['Манго', 'Аякс', 'Поли', 'Киви', 'Персик', 'Хьюстон'].
// Переменной allClients присвоен массив после применения метода concat с правильными аргументами.
