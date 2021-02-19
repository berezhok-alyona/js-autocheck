function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Пиши код ниже этой строки
  message =
    password == ADMIN_PASSWORD
      ? "Доступ разрешен"
      : "Доступ запрещён, неверный пароль!";
  console.log(message);
  // Пиши код выше этой строки
  return message;
}
checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");
