import Link from "next/link";
import { client } from "../../client";
import { systemURL } from "../../helpers";

export default async function Page({
  params: { systemSlug },
}: {
  params: { systemSlug: string };
}) {
  const { tags } = await client.content.ListTags(systemSlug);

  return (
    <>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.slug}>
            <Link href={systemURL(systemSlug, `/tags/${tag.slug}`)}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
