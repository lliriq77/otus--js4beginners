import { countSymbol } from "./hw-1-2";

describe("counSymbol", () => {
  it("returns string symbols quantity", () => {
    expect(countSymbol("", "")).toBe(0);
    expect(countSymbol("Hello", "world")).toBe(10);
  });
});
