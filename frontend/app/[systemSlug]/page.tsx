import Link from "next/link";
import { client } from "../client";

export default async function Page({
  params: { systemSlug },
}: {
  params: { systemSlug: string };
}) {
  const { system } = await client.content.GetSystem(systemSlug);
  const { entries } = await client.content.ListEntries(systemSlug);

  return (
    <>
      <h1>{system.name}</h1>
      <p>{system.tagline}</p>
      <ul>
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/${systemSlug}/entries/${entry.slug}`}>
              {entry.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
