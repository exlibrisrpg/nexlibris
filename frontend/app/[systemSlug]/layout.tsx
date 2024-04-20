import "modern-normalize/modern-normalize.css";
import "../styles.css";
import { Container } from "../components/Container";
import { Header } from "./Header";

export default async function RootLayout({
  children,
  params: { systemSlug },
}: {
  children: React.ReactNode;
  params: { systemSlug: string };
}) {
  return (
    <html lang="en">
      <body className={systemSlug}>
        <Header systemSlug={systemSlug} />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
