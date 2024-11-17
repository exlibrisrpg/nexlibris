import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { type CSSProperties } from "react";
import { client } from "../client";
import { systemURL } from "../helpers";

type HeaderProps = {
  systemSlug: string;
};

export async function Header({ systemSlug }: HeaderProps) {
  const { system } = await client.content.GetSystem(systemSlug);
  const { categories } = await client.content.ListCategories(systemSlug);

  return (
    <header>
      <Box style={{ backgroundColor: "var(--accent-3)" }}>
        <Container size="3" py="4">
          <Flex gapX="6" align="center">
            <Box flexGrow="1">
              <Heading as="h2" size="7">
                <Link underline="none" highContrast asChild>
                  <NextLink href={systemURL(systemSlug)}>
                    Ex Libris {system.name}
                  </NextLink>
                </Link>
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
        </Container>
      </Box>
      <Box
        style={
          {
            backgroundColor: "var(--accent-9)",
            "--accent-a5": "var(--accent-contrast)",
            "--accent-11": "var(--accent-contrast)",
            "--accent-a11": "var(--accent-contrast)",
            "--accent-12": "var(--accent-contrast)",
            "--accent-a12": "var(--accent-contrast)",
          } as CSSProperties
        }
      >
        <Container size="3" py="2">
          <Flex gapX="2">
            {categories.map((category) => (
              <Link asChild key={category.slug}>
                <NextLink
                  href={systemURL(systemSlug, `/tags/${category.slug}`)}
                >
                  {category.name}
                </NextLink>
              </Link>
            ))}
          </Flex>
        </Container>
      </Box>
    </header>
  );
}
