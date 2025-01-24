import useSWR from "swr";

export default function Product() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data } = useSWR("/api/products", fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
