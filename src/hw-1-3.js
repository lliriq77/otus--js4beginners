/* Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа. */
export function inputNum() {
  let str = 0;

  while (str.length !== 3) {
    str = window.prompt("Введите 3х-значное число", "123");
  }

  const result = Number(str[0]) + Number(str[1]) + Number(str[2]);
  console.log(result);
}
