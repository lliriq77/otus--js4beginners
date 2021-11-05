import { checkValid } from "./hw-10-1";

describe("checkValid", () => {
  it("checks a string", () => {
    expect(checkValid("89034345579")).toBe("Valid Phone number");
    expect(checkValid("myadress@email.com")).toBe("Valid E-mail");
    expect(checkValid("2021.10.09")).toBe("Valid Date");
    expect(checkValid("fhfhriukjekj")).toBe("Invalid text");
  });
});
