function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered == 0) {
    message = "В заказе еще нет товаров";
  } else if (ordered > available) {
    message = "Слишком большой заказ, на складе недостаточно товаров!";
  } else {
    message = "Заказ оформлен, с вами свяжется менеджер";
  }
  console.log(message);
  // Пиши код выше этой строки
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);
