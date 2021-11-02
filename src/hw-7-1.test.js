import { createInput } from "./hw-7-1";

describe("createInput", () => {
  beforeEach(() => {
    createInput();
  });
  it("makes markup", () => {
    expect(document.querySelector("input")).toBeTruthy();
    expect(document.querySelector("button")).toBeTruthy();
  });
  it("clears input and hides button after push", () => {
    document.querySelector("input").value = "test";
    expect(document.querySelector("input").value).toBe("test");
    document.querySelector("button").click();
    expect(document.querySelector("input").value).toBe("");
    expect(document.querySelector("button").hidden).toBe(true);
    expect(document.querySelectorAll("p").length).toBe(4);
  });
});
