/* Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня */
export function minPassedToday() {
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const minutesPassedToday = ((Date.now() - today) / 1000 / 60).toFixed(0);
  console.log(minutesPassedToday);
}
