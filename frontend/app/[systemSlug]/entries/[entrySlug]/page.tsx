import Image from "next/image";
import { client } from "../../../client";

export default async function Page({
  params: { systemSlug, entrySlug },
}: {
  params: { systemSlug: string; entrySlug: string };
}) {
  const { entry } = await client.content.GetEntry(systemSlug, entrySlug);

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
