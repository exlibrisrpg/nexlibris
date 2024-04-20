import clsx from "clsx";
import { text, type TextVariants } from "./Text.css";
import { type PolymorphicProps } from "../types";

type TextElement = "span" | "label" | "p";

type TextProps<E extends React.ElementType> = PolymorphicProps<E> &
  TextVariants;

const defaultElement = "span";

export function Text<
  As extends TextElement = typeof defaultElement,
  E extends React.ElementType = As,
>({
  as,
  children,
  className,
  size = "3",
  weight = "regular",
  ...props
}: TextProps<E>) {
  const Tag = as ?? defaultElement;

  return (
    <Tag className={clsx(text({ size, weight }), className)} {...props}>
      {children}
    </Tag>
  );
}
