function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? "На складе недостаточно товаров!"
      : "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
  // Пиши код выше этой строки
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);
