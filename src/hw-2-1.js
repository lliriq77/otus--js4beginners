/* В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них */
export function consoleMax(a, b) {
  const compare = a > b;

  return compare ? console.log(a) : console.log(b);
}
