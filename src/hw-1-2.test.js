import { countSymbol } from "./hw-1-2";

describe("countSymbol", () => {
  const {log} = console;
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterAll(() => {
    console.log = log;
  });

  it("returns string symbols quantity", () => {
    countSymbol("", "");
    expect(console.log).toHaveBeenCalledWith(0);
    countSymbol("Hello", "world");
    expect(console.log).toHaveBeenCalledWith(10);
  });
});
