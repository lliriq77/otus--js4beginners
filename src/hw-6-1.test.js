import { createArr } from "./hw-6-1";

describe("createArr", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
    createArr();
  });
  it("returns max, min of Array", () => {
    expect(console.log).toHaveBeenLastCalledWith(
      'Наибольший элемент а - "1570", наименьший элемент a - "10".'
    );
  });
  it("return sum of all array elements", () => {
    expect(console.log).toHaveBeenCalledWith(3659);
  });
  it("returns array = array x 2", () => {
    expect(console.log).toHaveBeenCalledWith(7318);
  });
});
