import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍊 orange",
      color: "orange",
    },
    {
      id: 4,
      name: "🍉 watermelon",
      color: "green, red",
    },
    {
      id: 5,
      name: "🥝 kiwi",
      color: "brown, green",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
