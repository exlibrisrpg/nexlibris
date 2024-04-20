import "modern-normalize/modern-normalize.css";
import "../styles.css";
import { Container } from "../components/Container";

export default function RootLayout({
  children,
  params: { systemSlug },
}: {
  children: React.ReactNode;
  params: { systemSlug: string };
}) {
  return (
    <html lang="en">
      <body className={systemSlug}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
