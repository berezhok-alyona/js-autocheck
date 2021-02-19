function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
  console.log(result);
  return result;
}
checkForName("Егор Колбасов", "Егор");
checkForName("Егор Колбасов", "егор");
checkForName("Егор Колбасов", "егОр");
checkForName("Егор Колбасов", "Женя");
checkForName("Вадим Некрасов", "Вадим");
checkForName("Вадим Некрасов", "вадим");
checkForName("Вадим Некрасов", "Дима");
