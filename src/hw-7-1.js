/* Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия 
1.Кнопка скрыта, если в поле ввода нет значения. 
2.При клике на кнопку добавляется новый параграф, 
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый 
из них удаляется. */

function buttonShow() {
  const button = document.querySelector(".button");
  button.hidden = false;
}

function buttonClick() {
  const input = document.querySelector(".input");
  const button = document.querySelector(".button");
  button.hidden = true;
  const div = document.querySelectorAll("div")[1];
  const newp = document.createElement("p");
  const allp = document.getElementsByTagName("p");
  newp.innerHTML = input.value;
  div.append(newp);

  input.value = "";
  if (allp.length > 5) {
    allp[0].remove();
  }
}

export function createInput() {
  const el = document.createElement("div");

  el.innerHTML = `
<input class='input'>
<button class='button'>
    Insert new
</button>
<div id='div'>
    <p>First</p>
    <p>Second</p>
    <p>Third</p>
</div>
`;

  const input = el.querySelector(".input");
  const button = el.querySelector(".button");
  button.hidden = true;
  input.addEventListener("keydown", buttonShow);
  button.addEventListener("click", buttonClick);
  document.body.append(el);
}

createInput();
