export default function App() {
  return <Button text="Click me" color="orange" />;
}

function Button({ color, disabled, text }) {
  return (
    <button disabled={disabled} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
