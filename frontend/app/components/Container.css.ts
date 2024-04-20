import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { theme } from "../styles.css";

export const container = recipe({
  base: {
    width: "100%",
    maxWidth: theme.sizing.pageWidth,
    marginInline: "auto",
    paddingInline: theme.spacing.pagePadding,
  },
  variants: {},
});

export type ContainerVariants = RecipeVariants<typeof container>;
