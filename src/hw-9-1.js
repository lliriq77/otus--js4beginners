/* Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате */

export function whatDay() {
  const inputDate = prompt("Enter date:dd.mm.yy", "");
  const [dd, mm, yy] = inputDate.split(".");
  const userDate = new Date(yy, mm - 1, dd);

  const nameOfDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return nameOfDay[userDate.getDay()];
}
