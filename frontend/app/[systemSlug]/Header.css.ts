import { style } from "@vanilla-extract/css";
import { theme } from "../styles.css";

export const header = style({
  backgroundColor: theme.color.headerBg,
  padding: theme.spacing.headerPadding
})
