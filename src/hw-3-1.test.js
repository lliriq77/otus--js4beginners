import { consolIntSum } from "./hw-3-1";

describe("consolIntSum", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("Returns from a to z integers sum", () => {
    consolIntSum(0, 10);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});
