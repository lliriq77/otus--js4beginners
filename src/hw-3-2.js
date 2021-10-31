/* .Вывести в консоль таблицу умножения на 7. 
7 x 1 = 7
7 x 2 = 14
...
7 x 9 = 63 */
export function mltplTable(a, b) {
  for (let i = 1; i <= b; i += 1) {
    console.log(`${a} x ${i} = ${a * i}`);
  }
}
