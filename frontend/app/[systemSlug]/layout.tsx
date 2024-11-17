import { Container, Theme } from "@radix-ui/themes";
import { Header } from "./Header";
import "@radix-ui/themes/styles.css";

export default async function RootLayout({
  children,
  params: { systemSlug },
}: {
  children: React.ReactNode;
  params: { systemSlug: string };
}) {
  return (
    <html lang="en">
      <body className={`rt-reset ${systemSlug}`}>
        <Theme>
          <Header systemSlug={systemSlug} />
          <Container size="3">{children}</Container>
        </Theme>
      </body>
    </html>
  );
}
