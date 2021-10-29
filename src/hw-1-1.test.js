import { countSumMul } from "./hw-1-1";

describe("countSumMul", () => {
  it("returns sum and product of a, b", () => {
    expect(countSumMul(1, 2)).toBe("Сумма = 3; Произведение = 2.");
    expect(countSumMul(17, 9)).toBe("Сумма = 26; Произведение = 153.");
    expect(countSumMul(0, 0)).toBe("Сумма = 0; Произведение = 0.");
    expect(countSumMul(10, 0)).toBe("Сумма = 10; Произведение = 0.");
  });
});
