import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>HTML</Button>
      <Button>CSS</Button>
      <Button>JavaScript</Button>
      <Button>React</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
