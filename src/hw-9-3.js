/* *В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя */

export function youngestUser(...args) {
  const arr = [...args];

  arr.map((item) => {
    const [dd, mm, yy] = item.birthDay.split(".");
    item.birthDayFormate = new Date(yy, mm, dd);
    return item;
  });

  arr.sort((a, b) => a.birthDayFormate - b.birthDayFormate).reverse();
  return arr[0].name;
}
