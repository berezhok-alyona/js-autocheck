const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Просторная квартира в центре";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

console.log(keys);
console.log(values);

// test12
function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount = Object.keys(object).length;
    }
  }
  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// test13
const apartment2 = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
const values2 = [];
// Пиши код ниже этой строки
const keys2 = Object.keys(apartment2);
for (const key in apartment2) {
  values2.push(apartment2[key]);
}

console.log(values2);
console.log(keys2);

// test14
function countProps2(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
}
console.log(countProps2({ name: "Mango", age: 2 }));
console.log(countProps2({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// test15
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  // Пиши код выше этой строки
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// test17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

// test18
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice("Радар"));
console.log(getProductPrice("Захват"));
console.log(getProductPrice("Сканер"));
console.log(getProductPrice("Дроид"));
console.log(getProductPrice("Двигатель"));
