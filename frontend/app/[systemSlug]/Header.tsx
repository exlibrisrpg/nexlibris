import { client } from "../client";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { header } from "./Header.css";

type HeaderProps = {
  systemSlug: string;
};

export async function Header({ systemSlug }: HeaderProps) {
  const { system } = await client.content.GetSystem(systemSlug);

  return (
    <header className={header}>
      <Container>
        <Heading as="h2" size="7">
          Ex Libris {system.name}
        </Heading>
        <Text>{system.tagline}</Text>
      </Container>
    </header>
  );
}
