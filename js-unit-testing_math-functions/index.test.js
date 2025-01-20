import { add, subtract, multiply, divide } from "./index.js";

test("adds the numbers 1 and 2 correctly", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test("subtracts the numbers 4 and 3 correctly", () => {
  const result = subtract(4, 3);
  expect(result).toBe(1);
});

test("multiply the numbers 4 and 3 correctly", () => {
  const result = multiply(4, 3);
  expect(result).toBe(12);
});

test("divide the numbers 10 and 2 correctly", () => {
  const result = divide(10, 2);
  expect(result).toBe(5);
});
