import Link from "next/link";
import { client } from "../client";
import { systemURL } from "../helpers";

export default async function Page({
  params: { systemSlug },
}: {
  params: { systemSlug: string };
}) {
  const { entries } = await client.content.ListEntries(systemSlug);

  return (
    <>
      <ul>
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={systemURL(systemSlug, `/entries/${entry.slug}`)}>
              {entry.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
