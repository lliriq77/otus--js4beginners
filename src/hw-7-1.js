/* Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия 
1.Кнопка скрыта, если в поле ввода нет значения. 
2.При клике на кнопку добавляется новый параграф, 
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый 
из них удаляется. */

export function createInput(el) {
  el.innerHTML = `
<input class='input'>
<button class='button'>
    Insert new
</button>
    <p>First</p>
    <p>Second</p>
    <p>Third</p>
`;

  const input = el.querySelector(".input");
  const button = el.querySelector(".button");
  button.hidden = true;
  input.oninput = () => {
    if (input.value === "") button.hidden = true;
    else button.hidden = false;
  };
  button.addEventListener("click", () => {
    button.hidden = true;
    const newp = document.createElement("p");
    const allp = el.getElementsByTagName("p");
    newp.innerHTML = input.value;
    el.append(newp);

    input.value = "";
    if (allp.length > 5) {
      allp[0].remove();
    }
  });
}
