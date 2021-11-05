import { youngestUser } from "./hw-9-3";

describe("youngestUser", () => {
  it("returns the youngest user name", () => {
    const user1 = { name: "Oleg", birthDay: "12.08.1990" };
    const user2 = { name: "Igor", birthDay: "07.11.1985" };

    expect(youngestUser(user1, user2)).toBe("Oleg");
  });
});
