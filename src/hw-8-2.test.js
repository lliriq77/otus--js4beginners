import { count } from "./hw-8-2";

describe("count", () => {
  it("it counts P and S of a cicle", () => {
    jest.spyOn(window, "prompt").mockReturnValue(3);
    jest.spyOn(console, "log");
    count();
    expect(console.log).toHaveBeenCalledWith(
      "Длина окружности = 19ед., площадь круга = 28ед. кв."
    );
  });
});
