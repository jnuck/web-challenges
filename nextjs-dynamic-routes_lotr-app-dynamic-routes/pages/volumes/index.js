import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Router from "next/dist/server/router";
Router;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
