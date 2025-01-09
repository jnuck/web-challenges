export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy = true }) {
  return (
    <>
      <h1>{isHappy ? ":)" : ":("}</h1>
    </>
  );
}
