import { countSumMul } from "./hw-1-1";

describe("countSumMul", () => {
  const cLog = console.log;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = cLog;
  });

  it("returns sum and product of a, b", () => {
    countSumMul(1, 2);
    expect(console.log).toHaveBeenCalledWith("Сумма = 3; Произведение = 2.");
    countSumMul(17, 9);
    expect(console.log).toHaveBeenCalledWith("Сумма = 26; Произведение = 153.");
    countSumMul(0, 0);
    expect(console.log).toHaveBeenCalledWith("Сумма = 0; Произведение = 0.");
    countSumMul(10, 0);
    expect(console.log).toHaveBeenCalledWith("Сумма = 10; Произведение = 0.");
  });
});
