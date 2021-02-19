// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток.То есть число должно быть меньше либо равно start и больше либо равно end.Результатом выражения проверки будет буль true или false.
// Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// Вызов isNumberNotInRange(20, 50, 76) возвращает true.
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку
  console.log(isNotInRange);
  return isNotInRange;
}
isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);
