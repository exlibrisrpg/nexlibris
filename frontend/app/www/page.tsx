import NextLink from "next/link";
import { Container, Heading, Link, Section } from "@radix-ui/themes";
import { client } from "../client";
import { systemURL } from "../helpers";

export default async function Page() {
  const { systems } = await client.content.ListSystems();

  return (
    <Container>
      <Section>
        <Heading size="9">Systems</Heading>
        <ul>
          {systems.map((system) => (
            <li key={system.slug}>
              <Link asChild>
                <NextLink href={systemURL(system.slug)}>{system.name}</NextLink>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
