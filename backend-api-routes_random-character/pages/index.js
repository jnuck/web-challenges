import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data } = useSWR("/api/random-character", fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Age: {data.age}</p>
      <p>Address: {data.address}</p>
      <p>Favorite animal: {data.favAnimal}</p>
    </>
  );
}
