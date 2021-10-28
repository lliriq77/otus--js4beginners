import { sumMul } from "./lesson_1_1";
describe("sumMul", () => {
    it('returns sum = 3 and product = 2 of a = 1 and b = 2', () => {
        expect(sumMul(1, 2)).toBe(`Сумма = 3; Произведение = 2.`);
    });

    it('returns sum = 26 and product = 153 of a = 17 and b = 9', () => {
        expect(sumMul(17, 9)).toBe(`Сумма = 26; Произведение = 153.`);
    });

    it('returns sum = 0 and product = 0 of a = 0 and b = 0', () => {
        expect(sumMul(0, 0)).toBe(`Сумма = 0; Произведение = 0.`);
    });

    it('returns sum = 10 and product = 0 of a = 10 and b = 0', () => {
        expect(sumMul(10, 0)).toBe(`Сумма = 10; Произведение = 0.`);
    });








});