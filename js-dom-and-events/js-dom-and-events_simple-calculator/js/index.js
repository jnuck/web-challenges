console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const add = document.querySelector('[data-js="add"]');
const subtract = document.querySelector('[data-js="subtract"]');
const multiply = document.querySelector('[data-js="multiply"]');
const divide = document.querySelector('[data-js="divide"]');
const exponent = document.querySelector('[data-js="exponent"]');
const modulo = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
add.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log(result);
});

subtract.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log(result);
});

multiply.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log(result);
});

divide.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log(result);
});

exponent.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log(result);
});

modulo.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log(result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseOne = document.querySelector('[data-js="increase-by-one"]');
const increaseFive = document.querySelector('[data-js="increase-by-five"]');
const decreaseOne = document.querySelector('[data-js="decrease-by-one"]');
const decreaseFive = document.querySelector('[data-js="decrease-by-five"]');
const multiplyTwo = document.querySelector('[data-js="multiply-by-two"]');
const divideTwo = document.querySelector('[data-js="divide-by-two"]');

increaseOne.addEventListener("click", () => {
  let result = operand1++;
  console.log(result);
});

increaseFive.addEventListener("click", () => {
  let result = operand1 + 5;
  console.log(result);
});

decreaseOne.addEventListener("click", () => {
  let result = operand1--;
  console.log(result);
});

decreaseFive.addEventListener("click", () => {
  let result = operand1 - 5;
  console.log(result);
});

multiplyTwo.addEventListener("click", () => {
  let result = operand1 * 2;
  console.log(result);
});

divideTwo.addEventListener("click", () => {
  let result = operand1 / 2;
  console.log(result);
});
// --^-- write your code here --^--