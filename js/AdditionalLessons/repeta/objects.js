// Shorthand properties
const username = "Mango";
const email = "mango@mail.com";
const signupData = {
  username,
  email,
};
console.log(signupData);

// Вычисление свойств
//<input name="color" value="tomato">
const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};
console.log(colorPickerData);

// Равенство объектов - как в массивах - НЕ РАВНЫ (разные ссылки на объекты)
// ЕСЛИ ЭТО ОДИН И ТОТ ЖЕ ОБЪЕКТ - РАВНЫ
const a = {
  x: 1,
  y: 2,
};
const b = a;
console.log(b === a);
// добавили переменную с в а (сooтветственно и в b)
a.c = 100;
a.hello = 5;
b.hello = 10;
console.log(a);
console.log(b);

// {x: 1, y: 2, c: 100, hello: 10}
// {x: 1, y: 2, c: 100, hello: 10}
