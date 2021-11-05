import { whatDay } from "./hw-9-1";

describe("whatDay", () => {
  it("returns day of week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("04.11.2021");
    expect(whatDay()).toBe("Thursday");
  });
});
