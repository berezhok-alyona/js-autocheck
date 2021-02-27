function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Добро пожаловать!";
  }
  return "Доступ запрещен, неверный пароль!";
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.
