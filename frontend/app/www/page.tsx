import Link from "next/link";
import { client } from "../client";
import { systemURL } from "../helpers";

export default async function Page() {
  const { systems } = await client.content.ListSystems();

  return (
    <>
      <h1>Systems</h1>
      <ul>
        {systems.map((system) => (
          <li key={system.slug}>
            <Link href={systemURL(system.slug)}>{system.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
