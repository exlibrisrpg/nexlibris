import { Link } from "@radix-ui/themes";
import NextLink from "next/link";
import { client } from "../client";
import { systemURL } from "../helpers";

export default async function Page({
  params: { systemSlug },
}: {
  params: { systemSlug: string };
}) {
  const { entries } = await client.content.ListEntries(systemSlug, {
    limit: 25,
  });

  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.slug}>
          <Link asChild>
            <NextLink href={systemURL(systemSlug, `/entries/${entry.slug}`)}>
              {entry.name}
            </NextLink>
          </Link>
        </li>
      ))}
    </ul>
  );
}
