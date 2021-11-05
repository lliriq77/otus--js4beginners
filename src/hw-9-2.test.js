import { minPassedToday } from "./hw-9-2";

describe("minPassedToday", () => {
  it("returns minutes passed from the beiging of 05.11.2021 to 19.00", () => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValue(1638651600000);
    jest.spyOn(Date, "now").mockReturnValue(1636128002931);
    jest.spyOn(console, "log");
    minPassedToday();
    expect(console.log).toBeCalledWith("1140");
  });
});
