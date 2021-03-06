// test1
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
console.log(apartment);

// test2
const apartment1 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// test4
const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Пиши код ниже этой строки
const ownerName = apartment2.owner.name;
const ownerPhone = apartment2.owner.phone;
const ownerEmail = apartment2.owner.email;
const numberOfTags = apartment2.tags.length;
const firstTag = apartment2.tags[0];
const lastTag = apartment2.tags[2];
// Пиши код выше этой строки

// test6
const apartment6 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment6.price = 5000;
apartment6.rating = 4.7;
apartment6.owner.name = "Генри Сибола";
apartment6.tags.push("trusted");
console.log(apartment6);

// test7 Add properties
const apartment7 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Генри Сибола",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment7.area = 60;
apartment7.rooms = 3;
apartment7.location = {
  country: "Ямайка",
  city: "Кингстон",
};

console.log(apartment7);

// test9 COUNTED PROPERTIES
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
  // Пиши код выше этой строки
};
console.log(credentials);

// test10
const apartment8 = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment8) {
  keys.push(key);
  values.push(apartment8[key]);
}
console.log(keys);
console.log(values);
