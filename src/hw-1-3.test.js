import { inputNum } from "./hw-1-3";

describe("inputNum", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("Asks to input a 3-digit number", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    inputNum();
    expect(console.log).toHaveBeenCalledWith(6);
  });

  it("Requests input until a 3-digit number is entered", () => {
    jest
      .spyOn(window, "prompt")
      .mockReturnValue("100")
      .mockReturnValueOnce("1234")
      .mockReturnValueOnce("9999999");
    inputNum();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
