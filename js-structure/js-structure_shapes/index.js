import { circleElement } from "./components/Circle/Circle.js";
import { pentagonElement } from "./components/Pentagon/Pentagon.js";
import { squareElement } from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

root.append(circleElement, squareElement, pentagonElement);
