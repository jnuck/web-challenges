import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
let name = chance.name();
let age = chance.age();
let profession = chance.profession();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
