const calculator = require("../src/calculator.js");

test("returns the sum of two numbers", () => {
  expect(calculator.add(1, 5)).toEqual(6);
});

test("returns the difference between two numbers", () => {
  expect(calculator.subtract(29, 5)).toEqual(24);
});

test("returns the result of the multiplication of two numbers", () => {
  expect(calculator.multiply(9, 5)).toEqual(45);
});

test("returns the result of the division of two numbers", () => {
  expect(calculator.divide(20, 5)).toEqual(4);
});
