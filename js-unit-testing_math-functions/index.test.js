import { add, subtract, multiply, divide } from "./index.js";

//Test add function
test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//Test subtract function
test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//Test multiply function
test("multiply the numbers 4 and 3 correctly", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-10, 10);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(10, -10);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-10, -10);
  expect(result).toBeGreaterThan(0);
});

//Test divide function
test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
