/* В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел. */
export function sumMul(a, b) {
  const sum = a + b;

  const mul = a * b;

  return `Сумма = ${sum}; Произведение = ${mul}.`;
}
