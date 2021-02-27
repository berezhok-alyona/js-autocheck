// // сделать из строки слаг как для url
// // 1. сделать из строки массив
//    2. привести все буквы к нижнему регистру
// // 3. разбить на буквы с тире
// // 4. сшиваем строку

const title = "Top 10 benefits of React framework";
const slugString = title.toLowerCase().split(" ").join("-");
console.log(slugString);

// CHAINING

// Сумма элементов двух массивов
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;
const array3 = array1.concat(array2);
console.log(array3);
for (const array of array3) {
  total += array;
}
// for (let i = 0; i < array3.length; i += 1) {
//   total += array3[i];
// }
console.log(total);

// // Работа с массивом карточек в Trello
// Метод splice
// Удалить, добавить, обновить
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
// удаляем карточку 3
const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);
console.log(index);
cards.splice(index, 1);

// const cardToRemove = cards.splice(2, 1);
console.table(cards);

// Добавить Карточку-6
const cardToAdd = "Карточка-6";
cards.push(cardToAdd);
console.table(cards);

// Добавить Карточку-3a вместо третьй
const cardToInsert = "Карточка-3a";
const indexCard = 2;
cards.splice(indexCard, 0, cardToInsert);
console.table(cards);

//Обновить - вместо карточки-5 вставить карточку-5**
const cardToUpdate = "Карточка-5";
const cardIndex = cards.indexOf(cardToUpdate);
console.log(cardIndex);
cards.splice(cardIndex, 1, "Карточка-5**");
console.table(cards);
