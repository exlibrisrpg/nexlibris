import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { grass } from "@radix-ui/colors";

export const theme = createGlobalTheme(":root", {
  color: {
    base1: grass.grass1,
    base2: grass.grass2,
    base3: grass.grass3,
    base4: grass.grass4,
    base5: grass.grass5,
    base6: grass.grass6,
    base7: grass.grass7,
    base8: grass.grass8,
    base9: grass.grass9,
    base10: grass.grass10,
    base11: grass.grass11,
    base12: grass.grass12,
  },
  space: {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
  },
});

globalStyle("body", {
  backgroundColor: theme.color.base2,
  color: theme.color.base11,
});

globalStyle("a", {
  color: "inherit",
});
