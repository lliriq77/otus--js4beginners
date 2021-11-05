import { minPassedToday } from "./hw-9-2";

describe("minPassedToday", () => {
  it("returns minutes passed from the beiging of 05.11.2021 to 19.00", () => {
    jest.useFakeTimers().setSystemTime(new Date(2021, 11, 5, 19).getTime());
    jest.spyOn(console, "log");
    minPassedToday();
    expect(console.log).toHaveBeenCalledWith("1140");
  });
});
