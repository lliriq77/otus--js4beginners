import { countOddArAvrg } from "./hw-3-3";

describe("countOddArrAvrg", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("returns odd arithmetic average for 0 to 10", () => {
    jest.spyOn(window, "prompt").mockReturnValue(10);
    countOddArAvrg(10);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});
