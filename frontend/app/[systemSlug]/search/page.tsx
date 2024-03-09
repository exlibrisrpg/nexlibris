import Link from "next/link";
import { client } from "../../client";
import { systemURL } from "../../helpers";

export default async function Page({
  params: { systemSlug },
  searchParams: { query } = {},
}: {
  params: { systemSlug: string };
  searchParams?: { query?: string };
}) {
  const results = query && (await client.content.Search(systemSlug, { query }));

  return (
    <>
      <h1>Search</h1>

      <form>
        <input
          type="text"
          name="query"
          placeholder="Search"
          defaultValue={query}
        />
      </form>

      {results &&
        (results.entries?.length > 0 ? (
          <ul>
            {results.entries.map((entry) => (
              <li key={entry.slug}>
                <Link href={systemURL(systemSlug, `/entries/${entry.slug}`)}>
                  {entry.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching entries found.</p>
        ))}
    </>
  );
}
