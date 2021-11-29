import { createInput } from "./hw-7-1";

describe("createInput", () => {
  let el;
  let input;
  let button;
  beforeEach(() => {
    el = document.createElement("div");
    createInput(el);
    input = el.querySelector("input");
    button = el.querySelector("button");
  });
  it("makes markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("clears input and hides button after push", () => {
    input.value = "test";
    expect(input.value).toBe("test");
    button.click();
    expect(el.querySelector("input").value).toBe("");
    expect(el.querySelector("button").hidden).toBe(true);
    expect(el.querySelectorAll("p")[3].innerHTML).toBe("test");
  });
  it("changes button hidden atribute after input", () => {
    input.value = "hello";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBeFalsy();
  });
  it("limits paragraphs quantity", () => {
    for (let i = 0; i < 10; i + 1) {
      button.click();
    }
    expect(el.querySelectorAll("p").length).toBe(5);
  });
});
