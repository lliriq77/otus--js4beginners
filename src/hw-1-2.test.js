import { countSymbol } from "./hw-1-2";

describe("countSymbol", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("returns string symbols quantity", () => {
    countSymbol("", "");
    expect(console.log).toHaveBeenCalledWith(0);
    countSymbol("Hello", "world");
    expect(console.log).toHaveBeenCalledWith(10);
  });
});
