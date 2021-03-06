// Methods Object.keys(obj), Object.values(obj), Object.entries(obj) - get data in Arrays and further work with arrays
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
const keys = Object.keys(feedback);

console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}
console.log(totalFeedback);

let totalFeedbackValues = 0;
const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedbackValues += value;
}
console.log(totalFeedbackValues);
