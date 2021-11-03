import { createInput } from "./hw-7-1";

describe("createInput", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    createInput(el);
  });
  it("makes markup", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
  });
  it("clears input and hides button after push", () => {
    el.querySelector("input").value = "test";
    expect(el.querySelector("input").value).toBe("test");
    el.querySelector("button").click();
    expect(el.querySelector("input").value).toBe("");
    expect(el.querySelector("button").hidden).toBe(true);
    expect(el.querySelectorAll("p")[3].innerHTML).toBe("test");
  });
});
