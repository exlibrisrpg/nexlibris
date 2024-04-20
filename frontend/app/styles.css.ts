import { assignVars, createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { grass } from "@radix-ui/colors";

export const theme = createGlobalTheme(":root", {
  sizing: {
    pageWidth: "1024px",
  },
  spacing: {
    pagePadding: "1rem",
    headerPadding: "1rem"
  },
  color: {
    pageBg: grass.grass2,
    pageFg: grass.grass11,
    headerBg: grass.grass2,
  },
});

globalStyle(".morkborg", {
  vars: assignVars(theme.color, {
    pageBg: "#fff",
    pageFg: "#000",
    headerBg: "#ffea00",
  })
})

globalStyle(".pirateborg", {
  vars: assignVars(theme.color, {
    pageBg: "#000",
    pageFg: "#fff",
    headerBg: "#000"
  })
})

globalStyle("body", {
  backgroundColor: theme.color.pageBg,
  color: theme.color.pageFg,
});

globalStyle("a", {
  color: "inherit",
});
