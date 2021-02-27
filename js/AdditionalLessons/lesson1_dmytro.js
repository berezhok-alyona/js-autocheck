// TASK 5
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

const arr = [4, 3, 5, 16, 16, 33, 4, 9];

const getSqrt = (array) => {
  let total = 0;
  for (const num of array) {
    if (num % Math.sqrt(num) === 0) {
      total += Math.sqrt(num);
    }
  }

  return total;
};
console.log(getSqrt(arr));
