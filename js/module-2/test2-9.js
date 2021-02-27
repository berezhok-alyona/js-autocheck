const getExtremeElements = function (array) {
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement];
};
// function getExtremeElements(array) {
// Пиши код ниже этой строки

// Пиши код выше этой строки
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Земля", "Марс", "Венера"]));
console.log(getExtremeElements(["яблоко", "персик", "груша", "банан"]));

// test10 - из строки массив - по разделителю delimeter
const splitMessage = function (message, delimeter) {
  let words;
  words = message.split(delimeter);
  return words;
};
console.log(splitMessage("Манго спешит на поезд", " "));
console.log(splitMessage("Манго", ""));
console.log(splitMessage("лучшее_за_неделю", "_"));
