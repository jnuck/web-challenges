import "./styles.css";

export default function App() {
  return <Greeting name="Joshua" />;
}

function Greeting({ name }) {
  if (name == "Andrea" || name == "Jessica") {
    return <h1>Hello, Coach!</h1>;
  } else {
    return <h1>Hello, {name}!</h1>;
  }
}
