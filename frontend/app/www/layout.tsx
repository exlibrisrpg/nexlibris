import "modern-normalize/modern-normalize.css";
import "../styles.css";
import { Container } from "../components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
