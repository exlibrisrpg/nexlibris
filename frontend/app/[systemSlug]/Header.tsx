import {
  Box,
  Container,
  Flex,
  Heading,
  Section,
  Text,
  TextField,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { client } from "../client";

type HeaderProps = {
  systemSlug: string;
};

export async function Header({ systemSlug }: HeaderProps) {
  const { system } = await client.content.GetSystem(systemSlug);

  return (
    <header style={{ backgroundColor: "var(--accent-3)" }}>
      <Container size="3">
        <Section size="1">
          <Flex gapX="6" align="center">
            <Box flexGrow="1">
              <Heading as="h2" size="7">
                Ex Libris {system.name}
              </Heading>
              <Text>{system.tagline}</Text>
            </Box>
            <Box>
              <TextField.Root placeholder="Search" variant="soft">
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>
        </Section>
      </Container>
    </header>
  );
}
