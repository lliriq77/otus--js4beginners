import { consolIntSumm } from "./hw-3-1";

describe("consolIntSumm", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("Returns from a to z integers summ", () => {
    consolIntSumm(0, 10);
    expect(console.log).toHaveBeenCalledWith(55);
  });
});
