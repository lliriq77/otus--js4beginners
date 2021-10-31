import { diff } from "./hw-5-1";

describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  it("returns difference between a,b", () => {
    expect(diff(5, 3)).toBe(2);
    expect(diff(3, 5)).toBe(2);
    expect(diff(0, 0)).toBe(0);
  });
});
