import { requestNum } from "./hw-2-2";

describe("requestNum", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  it("Returns month name", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10");
    requestNum();
    expect(console.log).toHaveBeenCalledWith("october");
  });
});
