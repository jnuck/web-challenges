import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function TheTwoTowers() {
  const details = volumes[1];
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <ul>
        <li>
          {details.books[0].ordinal}: {details.books[0].title}
        </li>
        <li>
          {details.books[1].ordinal}: {details.books[1].title}
        </li>
      </ul>
      <Image src={details.cover} width={140} height={230}></Image>
    </>
  );
}
