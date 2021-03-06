// test19
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propArray = [];
  for (const product of products) {
    let keys = Object.keys(product);

    for (const key of keys) {
      if (key === propName) {
        propArray.push(product[key]);
      }
    }
  }
  return propArray;
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));

// test20
const products1 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (const product of products1) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
  return 0;
}

console.log(calculateTotalPrice("Бластер"));
console.log(calculateTotalPrice("Радар"));
console.log(calculateTotalPrice("Дроид"));
console.log(calculateTotalPrice("Захват"));
console.log(calculateTotalPrice("Сканер"));

// test21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// test22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

const meanTemperature = yesterday + today + tomorrow;

// test25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {
  today: {
    low: todayLow,
    high: todayHigh,
    iconToday = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: tomorrowLow,
    high: tomorrowHigh,
    iconTomorrow = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

const highToday = todayHigh;
const lowToday = todayLow;
const todayIcon = iconToday;

const highTomorrow = tomorrowHigh;
const lowTomorrow = tomorrowLow;
const tomorrowIcon = iconTomorrow;

//test26
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
);

// test27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
console.log(bestScore);
console.log(worstScore);

// test28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore1 = Math.max(...allScores);
const worstScore1 = Math.min(...allScores);

console.log(allScores);
console.log(bestScore1);
console.log(worstScore1);

// test30
function makeTask(data) {
  const completed = false;
  const category = "Общее";
  const priority = "Обычный";
  // Пиши код ниже этой строки
  const newTask = { category, priority, ...data, completed };
  // Пиши код выше этой строки
  return newTask;
}
console.log(
  makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" })
);
console.log(makeTask({ category: "Финансы", text: "Забрать проценты" }));
console.log(makeTask({ priority: "Низкий", text: "Выбрать шампунь" }));
console.log(makeTask({ text: "Купить хлеб" }));

// test31
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

// test32
function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num) {
      total += arg;
    }
  }

  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// test33
function findMatches(array, ...args) {
  const matches = [];
  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// test34
const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  getBooks() {
    return "Возвращаем все книги";
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Мгла"));
console.log(bookShelf.removeBook("Красный закат"));
console.log(bookShelf.updateBook("Пески Дюны", "Дюна"));

// test35
const bookShelf1 = {
  books: ["Последнее королевство", "Мгла", "Страж снов"],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
  },
};

console.log(bookShelf1.updateBook("Мгла", "Хроники подземелий"));
console.log(bookShelf1.updateBook("Последнее королевство", "Дюна"));

// test38
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
    return this.potions;
    // Пиши код выше этой строки
  },
};

// test39
const atTheOldToad1 = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
    // Пиши код выше этой строки
  },
};

// test40
const atTheOldToad2 = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
    // Пиши код выше этой строки
    // return this.potions;
  },
};

// console.log(atTheOldToad2.updatePotionName("Дыхание дракона", "Полиморф"));
// console.log(atTheOldToad2.updatePotionName("Каменная кожа", "Невидимка"));
