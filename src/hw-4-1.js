/* Создайте объект user, содержащий поле name со
значением ‘John’. Запросить у пользователя ввод числа. 
Записать введенное значение в поле age объекта user. */

export function createAdmin() {
  const user = {
    name: "John",
  };

  user.age = prompt("Enter age");

  /* Создать копию объекта user с именем admin.
    Добавить новому объекту поле role со значением
    ‘admin’. */

  const admin = Object.assign(user, { role: "admin" });

  /* Записать все значения полей объекта admin в
    отдельные переменные. Имена переменных
    должны совпадать с названиями полей. */

  const { age, name, role } = admin;

  return `user: ${name}, age: ${age}, role: ${role}.`;
}
