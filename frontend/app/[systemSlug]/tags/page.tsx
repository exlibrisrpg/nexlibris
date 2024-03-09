import { client } from "../../client";

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
          <li key={tag.slug}>{tag.name}</li>
        ))}
      </ul>
    </>
  );
}
