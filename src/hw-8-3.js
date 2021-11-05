/* Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c. */
export function rslvQuadEq() {
    const aT = prompt('Enter a');
    const bT = prompt('Enter b');
    const cT = prompt('Enter c');
    const d = bT ** 2 - 4 * aT * cT;
    let x1; let x2;

    if (d > 0) {
        x1 = (-bT + (d ** 0.5)) / (2 * aT);
        x2 = (-bT - (d ** 0.5)) / (2 * aT);
        return `Ответ: ${x1}; ${x2}.`;

    } if (d === 0) {
        x1 = -bT / (2 * aT);
        return `Ответ: ${x1}.`;

    } 
        return ('Уравение не имеет корней');
    
}
