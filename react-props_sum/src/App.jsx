export default function App() {
  return <Sum />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {(valueA = 10)} + {(valueB = 20)} = {valueA + valueB}
    </h1>
  );
}
