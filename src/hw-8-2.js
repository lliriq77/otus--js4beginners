
/* Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R. */

export function count() {
    const radius = prompt('Введите радиус');
    const p = (2 * Math.PI * radius).toFixed(0);
    const s = (Math.PI * (radius ** 2)).toFixed(0);

    console.log(`Длина окружности = ${p}ед., площадь круга = ${s}ед. кв.`)
}

