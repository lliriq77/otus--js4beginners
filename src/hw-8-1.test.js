import { ifTriangle } from "./hw-8-1";

describe("ifTriangle", () => {
  it("returns if the triangle is a right triangle", () => {
    expect(ifTriangle(3, 4, 5)).toBe("Треугольник - прямоугольный");
    expect(ifTriangle(3, 6, 9)).toBe("Треугольник - непрямоугольный");
  });
});
