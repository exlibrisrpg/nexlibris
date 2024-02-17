import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { theme } from "../styles.css";

export const container = recipe({
  base: {
    maxWidth: "60ch",
    marginInline: "auto",
    paddingInline: theme.space[4],
  },
  variants: {},
});

export type ContainerVariants = RecipeVariants<typeof container>;
