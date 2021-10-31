/* Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.). */

export function requestNum() {
    const num = prompt('Enter number 1-12') - 1;

    const arr = [
        'january',
        'fabruary',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ];
    console.log(arr[num]);
}