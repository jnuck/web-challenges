console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword == SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 5;

if (numberOfHotdogs < 5) {
  let price = 2;
  console.log(price * numberOfHotdogs);
} else if (numberOfHotdogs < 100) {
  let price = 1.5;
  console.log(price * numberOfHotdogs);
} else if (numberOfHotdogs < 1000000) {
  let price = 1;
  console.log(price * numberOfHotdogs);
} else {
  let price = 0.1;
  console.log(price * numberOfHotdogs);
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";

statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

let greeting = userName == "Roland" ? "Hello Coach" : "Hello " + userName + "!";

console.log(greeting);
