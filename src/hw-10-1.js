/* Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты.
3.*Номером телефона. */

export function checkValid(str) {
  const regExpPhone = /[+\d)(-]{10,16}/g;
  const regExpDate = /[\d]{1,4}[.:;]{1}[\d]{1,2}[.:;]{1}[\d]{1,4}/g;
  const regExpEmail =
    /[a-zA-Z0-9.]{1,}[@]{1}[a-z0-9]{1,}[.]{1}[a-z0-9]{2,5}.{0,5}/g;

  if (regExpEmail.test(str)) {
    return "Valid E-mail";
  }
  if (regExpPhone.test(str)) {
    return "Valid Phone number";
  }
  if (regExpDate.test(str)) {
    return "Valid Date";
  }
  return "Invalid text";
}
