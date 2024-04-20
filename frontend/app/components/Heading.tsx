import clsx from "clsx";
import { heading, type HeadingVariants } from "./Heading.css";
import { type PolymorphicProps } from "../types";

type HeadingElement = "h1" | "h2" | "h3";

type HeadingProps<E extends HeadingElement> = PolymorphicProps<E> &
  HeadingVariants;

const defaultElement = "h2";

export function Heading<As extends HeadingElement = typeof defaultElement>({
  as,
  children,
  className,
  size = "6",
  weight = "bold",
  ...props
}: HeadingProps<As>) {
  const Tag = as ?? defaultElement;

  return (
    <Tag className={clsx(heading({ size, weight }), className)} {...props}>
      {children}
    </Tag>
  );
}
