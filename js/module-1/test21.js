function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // дополни эту строку
  console.log(isInRange);
  return isInRange;
}
isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

// Вызов isNumberInRange(10, 30, 17) возвращает true.
// Вызов isNumberInRange(10, 30, 5) возвращает false.
// Вызов isNumberInRange(20, 50, 24) возвращает true.
// Вызов isNumberInRange(20, 50, 76) возвращает false.
