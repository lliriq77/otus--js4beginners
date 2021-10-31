import { mltplTable } from "./hw-3-2";

describe("mltplTable", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  it("returns multiplication table 7 x (1-9)", () => {
    mltplTable(7, 9);
    expect(console.log.mock.calls).toEqual([
      ["7 x 1 = 7"],
      ["7 x 2 = 14"],
      ["7 x 3 = 21"],
      ["7 x 4 = 28"],
      ["7 x 5 = 35"],
      ["7 x 6 = 42"],
      ["7 x 7 = 49"],
      ["7 x 8 = 56"],
      ["7 x 9 = 63"],
    ]);
  });
});
