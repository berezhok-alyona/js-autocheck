// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Тесты
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice('3, 400) возвращает 1200.
// Вызов calculateTotalPrice(1, 3500) возвращает 3500.
// Вызов calculateTotalPrice(12, 70) возвращает 840.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerItem;
  console.log(totalPrice);
  // Пиши код выше этой строки
  return totalPrice;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);
