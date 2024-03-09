import Link from "next/link";
import { client } from "../../../client";
import { systemURL } from "../../../helpers";

export default async function Page({
  params: { systemSlug, tagSlug },
}: {
  params: { systemSlug: string; tagSlug: string };
}) {
  const { tag } = await client.content.GetTag(systemSlug, tagSlug);

  return (
    <>
      <h1>{tag.name}</h1>
      <ul>
        {tag.entries.map((entry) => (
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
