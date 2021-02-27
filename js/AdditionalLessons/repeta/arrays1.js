// Объединить все элементы массива в одно строковое значение
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// const string = friends.join(", ");
// console.log(string);

// Заменить регистр каждого символа в строке на противоположный
const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);
for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     console.log("Эта буква в нижнем регистре", letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log("Эта буква в верхнем регистре", letter);
  //     invertedString += letter.toLowerCase();
  //     }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);
