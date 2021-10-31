/* Запросить у пользователя ввод числа N. 
Вывести в консоль среднее арифметическое всех 
нечётных чисел от 1 до N. */

export function countOddArAvrg() {
  const num = prompt("Enter a number");
  const numbers = [];
  let sum2 = 0;

  for (let i = 0; i <= num; i += 1) {
    if (i % 2 !== 0) {
      sum2 += i;
      numbers.push(i);
    }
  }
  const result = sum2 / numbers.length;
  console.log(result);
}
