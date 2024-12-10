console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // Prevent default form behavior
  event.preventDefault();

  // Store form values in variables
  const formElements = event.target.elements;
  const firstName = formElements.firstName.value;
  const age = formElements.age.value;
  const badness = formElements.badness.value;
  const ageBadnessSum = Number(age) + Number(badness);

  // Bonus: Calculate and log age-badness-sum
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}`);

  // Reset form after submitting & focus on first input field
  event.target.reset();
  event.target.elements.firstName.focus();
});
