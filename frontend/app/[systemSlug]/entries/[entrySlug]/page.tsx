import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import { client } from "../../../client";
import { systemURL } from "../../../helpers";

export default async function Page({
  params: { systemSlug, entrySlug },
}: {
  params: { systemSlug: string; entrySlug: string };
}) {
  const { entry } = await client.content.GetEntry(systemSlug, entrySlug);

  if (entrySlug !== entry.slug) {
    permanentRedirect(systemURL(systemSlug, `/entries/${entry.slug}`));
  }

  return (
    <>
      <h1>{entry.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: entry.description }} />

      <div style={{ width: "24rem", height: "24rem", position: "relative" }}>
        <Image
          src={entry.coverURL}
          alt=""
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
    </>
  );
}
