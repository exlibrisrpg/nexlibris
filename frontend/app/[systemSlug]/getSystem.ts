import { client } from "../client";

export async function getSystem(systemSlug: string) {
  const { system } = await client.content.GetSystem(systemSlug);
  return system;
}
