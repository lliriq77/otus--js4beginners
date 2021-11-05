import { rslvQuadEq } from "./hw-8-3";

describe("rslvQuadEq", () => {
  it("returns the result of quad equation", () => {
    jest
      .spyOn(window, "prompt")
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(6)
      .mockReturnValueOnce(9);
    expect(rslvQuadEq()).toBe("Уравение не имеет корней");
    jest
      .spyOn(window, "prompt")
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(56)
      .mockReturnValueOnce(5);
    expect(rslvQuadEq()).toBe(
      "Ответ: -0.09233031693779789; -2.707669683062202."
    );
    jest
      .spyOn(window, "prompt")
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(20)
      .mockReturnValueOnce(5);
    expect(rslvQuadEq()).toBe("Ответ: -0.5.");
  });
});
