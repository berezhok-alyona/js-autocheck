function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password == null) {
    // Дополни эту строку
    message = "Отменено пользователем!";
  } else if (password == ADMIN_PASSWORD) {
    // Дополни эту строку
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
  console.log(message);
  return message;
}
checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");

// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
