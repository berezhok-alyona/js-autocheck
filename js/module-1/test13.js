// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// Тесты
// Объявлена функция isAdult(age).
// В выражении проверки используется оператор >=.
// Вызов isAdult(20) возвращает true.
// Вызов isAdult(14) возвращает false.
// Вызов isAdult(8) возвращает false.
// Вызов isAdult(37) возвращает true.
function isAdult(age) {
  // Пиши код ниже этой строки

  const passed = age >= 18;
  console.log(passed);
  // Пиши код выше этой строки
  return passed;
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);
