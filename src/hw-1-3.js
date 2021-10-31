/* Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа. */
export function inputNum() {
  let str = 0;

  while (str.length !== 3) {
    str = window.prompt("Введите 3х-значное число", "123");
  }

  const result = +str[0] + +str[1] + +str[2];
  console.log(result);
}
