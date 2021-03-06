const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

console.log(numbers);

// Find max and min temperature
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(Math.max(...temps));
console.log(Math.min(...temps));

const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);

// spread of objects
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
const c = { ...a, x: 10, ...b, y: 20 };
console.log(c);

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  ...defaultSettings,
  theme: "dark",
};

console.log(userSettings);

// DESTRUCTION OF ARRAYS
const rgb = [255, 100, 80];
const [red, green, blue] = rgb;
console.log(red, green, blue);

// TASK Find the highest rating
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};
const entries = Object.entries(authors);
console.log(entries);

for (const [name, rating] of entries) {
  //   const [name, rating] = entry;
  //   const name = entry[0];
  //   const rating = entry[1];
  console.log(name, rating);
}
