import { putCircleInSquare } from "./hw-2-3";

describe("putSircleInSquare", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  it("Checks if square can contain a circe", () => {
    putCircleInSquare(10, 10);
    expect(console.log).toHaveBeenCalledWith("круг не поместится в квадрат");
  });
});
