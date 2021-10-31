/* Вывести в консоль сумму всех целых чисел от 50 до 100. */

export function consolIntSumm(a, z) {
  let sum = 0;
  for (let i = a; i <= z; i += 1) {
    sum += i;
  }
  console.log(sum);
}
