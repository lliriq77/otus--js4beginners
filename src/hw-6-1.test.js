import { createArr } from "./hw-6-1";

describe("createArr", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });
  it("returns max, min of Array", () => {
    createArr();
    expect(console.log).toHaveBeenLastCalledWith(
      'Наибольший элемент а - "1570", наименьший элемент a - "10".'
    );
  });
  it("return sum of all array elements", () => {
    createArr();
    expect(console.log).toHaveBeenCalledWith(3659);
  });
  it("returns array = array x 2", () => {
    createArr();
    expect(console.log).toHaveBeenCalledWith(7318);
  });
});
