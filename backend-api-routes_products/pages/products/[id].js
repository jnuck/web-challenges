import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetail() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`, fetcher);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Description: {data.description}</p>
      <p>Cateory: {data.category}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
    </div>
  );
}
