function checkForSpam(message) {
  let result;
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  console.log(result);
  // Пиши код выше этой строки
  return result;
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");

// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.
// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.
