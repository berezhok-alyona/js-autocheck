// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//   let message;

//   if (ordered === 0) {
//     message = "В заказе еще нет товаров";
//   } else if (ordered > available) {
//     message = "Слишком большой заказ, на складе недостаточно товаров!";
//   } else {
//     message = "Заказ оформлен, с вами свяжется менеджер";
//   }

//   return message;
//   // Пиши код выше этой строки
// }

const checkStorage = function (available, ordered) {
  if (ordered === 0) {
    return "В заказе еще нет товаров";
  }
  if (ordered > available) {
    return "Слишком большой заказ, на складе недостаточно товаров!";
  }
  return "Заказ оформлен, с вами свяжется менеджер";
};

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// test5
// const fruits = ["яблоко", "слива", "груша", "апельсин"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement);
// console.log(lastElement);

// test6
const fruits = ["яблоко", "персик", "груша", "банан"];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElement);
