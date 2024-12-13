console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const programmingLanguage of programmingLanguages) {
  const newItem = document.createElement("li");
  newItem.innerText = `${programmingLanguage}`;
  ol.append(newItem);
}
// --^-- write or modify code above this line --^--
