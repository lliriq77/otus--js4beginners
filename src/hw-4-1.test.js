import { createAdmin } from "./hw-4-1";

describe("createAdmin", () => {
  it("is a function", () => {
    expect(createAdmin).toBeInstanceOf(Function);
  });

  it("requiers to input age = 30 and returns admin data", () => {
    jest.spyOn(window, "prompt").mockReturnValue(30);
    expect(createAdmin()).toBe("user: John, age: 30, role: admin.");
  });
});
