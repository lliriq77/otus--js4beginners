import { consoleMax } from "./hw-2-1";

describe("consoleMax", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("Returns (a,b) maximum", () => {
    consoleMax(10, 5);
    expect(console.log).toHaveBeenCalledWith(10);
    consoleMax(0, 0);
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
